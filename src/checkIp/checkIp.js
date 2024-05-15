const express = require("express"); // express를 불러옴
const requestIp = require('request-ip');
const app = express();

app.use(requestIp.mw()); // 미들웨어로 IP 정보 요청
// app.set('trust proxy', true);

app.get('/', (req, res) => {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ip);
    res.send(`Your IP fafasfafis ${ip}`);
    console.log(`Your asfasIP is ${ip}`);
});