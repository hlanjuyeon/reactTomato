const express = require("express"); // express를 불러옴
const cors = require("cors"); // cors를 불러옴
const mysql = require("mysql2"); // mysql을 불러옴
const bodyParser = require("body-parser"); // 요청정보 처리

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

// 서버 연결 시 발생
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

// post 요청 시 값을 객체로 바꿔줌
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// sqlQuery
// To do List : state 
app.post("/list", (req, res) => {

    console.log("/list");
    const state = req.body.state;
    
    const sqlQuery =
        `SELECT id, country, content, deadline, priority, DATE_FORMAT(writeDate, '%W, %e %M %Y, %r') AS formattedWriteDate, DATE_FORMAT(updateDate, '%W, %e %M %Y, %r') AS formattedUpdateDate, state, isTrash FROM board
        WHERE isTrash = 1 OR state = ?
        ORDER BY 
            CASE WHEN isTrash = 1 THEN 0 ELSE 1 END, 
            updateDate DESC`;

    db.query(sqlQuery, [ state ], (err, result) => {
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

    db.query(sqlQuery, [ resBody.country, resBody.content, resBody.deadline, resBody.priority, resBody.writeDate, resBody.updateDate, resBody.state, resBody.isTrash], (err, result) => {
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

app.post("/update", (req, res) => {
    console.log("/update", req.body);

    const { id, updateDate, state, isTrash } = req.body.todoItem;

    const sqlQuery =
        "UPDATE BOARD SET UPDATEDATE=?, STATE=?, ISTRASH=? WHERE id=?;";

    db.query(sqlQuery, [updateDate, state, isTrash, id], (err, result) => {
        if (err) {
            res.status(500).send({ success: false, error: err.message });
        } else {
            res.send({ success: true, data: result });
            console.log("result=", result);
        }
    });
});

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
