const express = require("express"); // express를 불러옴
const cors = require("cors"); // cors를 불러옴
const mysql = require("mysql2"); // mysql을 불러옴
const bodyParser = require("body-parser"); // 요청정보 처리
const requestIp = require('request-ip');

const app = express();
const PORT = 3700; // 포트번호 설정

// MySQL 연결
const db = mysql.createPool({
    host: "localhost", // 호스트
    port: 3306,
    user: "newuser",      // 데이터베이스 계정
    password: "newuser",      // 데이터베이스 비밀번호
    database: "todolist_db",  // 사용할 데이터베이스
});

app.use(cors({
    origin: "*",                // 출처 허용 옵션
    credentials: true,          // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200,  // 응답 상태 200으로 설정
}));

app.use(requestIp.mw()); // 미들웨어로 IP 정보 요청
// app.set('trust proxy', true);

app.get((req, res) => {
    let ip = requestIp.getClientIp; // 클라이언트 IP를 얻습니다.
    console.log(ip);
    res.send(`Your IP is ${ip}`);
    console.log(`Your IP is ${ip}`);
});

app.get('/', (req, res) => {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ip);
    res.send(`Your IP is ${ip}`);
    console.log(`Your IP is ${ip}`);
});

// 서버 연결 시 발생
app.listen(PORT, '0.0.0.0', () => {
    console.log(`server running on port ${PORT}`);
});

// post 요청 시 값을 객체로 바꿔줌
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// sqlQuery
// To do List 
app.post("/list", (req, res) => {

    console.log("/list");
    const state = req.body.state;
    const country = req.body.country;

    const sqlQuery =
        `SELECT id, country, content, deadline, priority, DATE_FORMAT(writeDate, '%W, %e %M %Y, %r') AS formattedWriteDate, DATE_FORMAT(updateDate, '%W, %e %M %Y, %r') AS formattedUpdateDate, state, isTrash, bank FROM board
        WHERE country = ? and (isTrash = 1 OR state = ?)
        ORDER BY 
            CASE WHEN isTrash = 1 THEN 0 ELSE 1 END, 
            updateDate DESC`;

    db.query(sqlQuery, [country, state], (err, result) => {
        if (err) {
            res.status(500).send({ success: false, error: err.message });
        } else {
            res.send({ success: true, data: result });
        }
    });
});

// get list count
app.post("/list/count", (req, res) => {

    console.log("/list/count");
    const state = req.body.state;
    const country = req.body.country;

    const sqlQuery =
        `SELECT count(*) FROM board
        WHERE country = ? and (isTrash = 1 OR state = ?)`;

    db.query(sqlQuery, [country, state], (err, result) => {
        if (err) {
            res.status(500).send({ success: false, error: err.message });
        } else {
            res.send({ success: true, data: result });
        }
    });
});


app.post("/insert", async (req, res) => {
    console.log("/insert", req.body);

    const resBody = {
        country: req.body.country,
        content: req.body.content,
        deadline: req.body.deadline,
        priority: req.body.priority,
        writeDate: req.body.writeDate,
        updateDate: req.body.updateDate,
        state: req.body.state,
        isTrash: req.body.isTrash,
    }

    const sqlQuery =
        `INSERT INTO board (country, content, deadline, priority, writeDate, updateDate, state, isTrash) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sqlQuery, [resBody.country, resBody.content, resBody.deadline, resBody.priority, resBody.writeDate, resBody.updateDate, resBody.state, resBody.isTrash], (err, result) => {
        if (err) {
            res.status().send({ success: false, error: err.message });
        } else {
            res.send({ success: true, data: result });
        }
    });
});

// update를 위해
app.post("/detail", (req, res) => {
    console.log("/detail", req.body);
    const { id } = req.body;

    const sqlQuery =
        "SELECT * FROM BOARD WHERE ID = ?";

    db.query(sqlQuery, [id], (err, result) => {
        if (err) {
            res.status(500).send({ success: false, error: err.message });
        } else {
            res.send({ success: true, data: result });
        }
    });
});

// update state
app.post("/update/state", (req, res) => {
    console.log("/update/state", req.body);

    const id = req.body.todoItem.id;
    const updateDate = req.body.todoItem.updateDate;
    const state = req.body.todoItem.state;

    const sqlQuery =
        `UPDATE BOARD SET updateDate=?, state=?WHERE id=?`;

    db.query(sqlQuery, [updateDate, state, id], (err, result) => {
        if (err) {
            res.status(500).send({ success: false, error: err.message });
        } else {
            res.send({ success: true, data: result });
            console.log("result=", result);
        }
    });
});

// update isTrash
app.post("/update/trash", (req, res) => {
    console.log("/update/trash", req.body);

    const id = req.body.todoItem.id;
    const updateDate = req.body.todoItem.updateDate;
    const isTrash = req.body.todoItem.isTrash;

    const sqlQuery =
        `UPDATE BOARD SET updateDate=?, isTrash=? WHERE id=?`;

    db.query(sqlQuery, [updateDate, isTrash, id], (err, result) => {
        if (err) {
            res.status(500).send({ success: false, error: err.message });
        } else {
            res.send({ success: true, data: result });
            console.log("result=", result);
        }
    });
});

// delete (after 30days)
app.post("/delete", (req, res) => {
    const { id } = req.body;
    console.log("/delete(id) => ", id);

    const sqlQuery = "DELETE FROM BOARD WHERE ID = ?;";

    db.query(sqlQuery, [id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({ success: false, error: err.message });
        } else {
            res.send({ success: true, data: result });
        }
    });
});
