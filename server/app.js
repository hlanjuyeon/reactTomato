const express = require('express');

const app = express();
const port = 3000;

// MySQL 연결
const db = mysql.createPool({
    host: "localhost", // 호스트
    port: 3306,
    user: "newuser",      // 데이터베이스 계정
    password: "newuser",      // 데이터베이스 비밀번호
    database: "todolist",  // 사용할 데이터베이스
});

app.use(express.json());

app.get('/', (req, res)=>
{
    res.send(`<h2>welcome to server</h2>`);
});

app.listen(port, ()=>
{
   console.log(`SERVER 실행됨 ${port}`); 
});
