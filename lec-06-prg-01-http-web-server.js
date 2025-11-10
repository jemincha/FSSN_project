// 1. Node.js http 모듈 가져오기
const http = require('http');

// 2. 서버 설정
const serverName = 'localhost'; //127.0.0.1
const serverPort = 8080;

// 3. HTTP 서버 생성
const server = http.createServer((req, res) => {
    // 4. HTTP 응답 헤더 작성
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    // 5. HTTp 응답 본문 작성, 전송 완료
    res.end('<html><body>Hello World from Node.js HTTP Server!</body></html>');

});

// 6. 지정된 포트 번호와 이름으로 서버 실행
server.listen(serverPort, serverName, () => {
    console.log(`## HTTP server started at HTTP://${serverName}:${serverPort}.`);

});