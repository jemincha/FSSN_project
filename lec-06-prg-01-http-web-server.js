// 1. Node.js http 모듈 가져오기
const http = require('http');

// 2. 서버 설정
const serverName = 'localhost'; //127.0.0.1
const serverPort = 8080;

// 3. HTTP 서버 생성
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        console.log("## do_GET() activated.");
    
    // 4. HTTP 응답 헤더 작성
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
        if (req.url.includes('?')) {
        // Query parameter 있는 경우 계산 요청
        res.end('<html><body>Query parameter logic (ToDo)</body></html>');

        } else {
        // Query parameter 없는 경우 단순 경로 요청
        // 5. HTTp 응답 본문
        const responseMessage = `<p>HTTP Request GET for Path: ${req.url}</p>`;
        res.end(`<html><body>${responseMessage}</body></html>`);
        console.log(`## GET request for directory => ${req.url}.`);
    }
   
    } else {
    // GET 아닌 요청 => 일단 거부
    console.log(`This server only handles GET request for now`);
    }
});

// 6. 지정된 포트 번호와 이름으로 서버 실행
server.listen(serverPort, serverName, () => {
    console.log(`## HTTP server started at HTTP://${serverName}:${serverPort}.`);

});