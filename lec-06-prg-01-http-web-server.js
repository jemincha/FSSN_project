// 1. Node.js http, url 모듈 가져오기
const http = require('http');
const url = require('url');

// 2. 서버 설정
const serverName = 'localhost'; //127.0.0.1
const serverPort = 8080;

function simpleCalc(para1, para2){ // multiplication function
    return para1 * para2;
}

function parameterRetrieval(queryParams) { // multiplication parameter
    const var1 = parseInt(queryParams.var1, 10);
    const var2 = parseInt(queryParams.var2, 10);
    return [var1, var2];
}

// 3. HTTP 서버 생성
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        console.log("## do_GET() activated.");
    
        // 4. HTTP 응답 헤더 작성
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
        // req.url에서 query parameter 분리
        const parsedUrl = url.parse(req.url, true);
        const path = parsedUrl.pathname;
        const queryParams = parsedUrl.query;

        // [GET 분기 1: '?' 있는 경우]
        if (Object.keys(queryParams).length > 0) {
            console.log("## GET request for calculation.");

            // 1. 파라미터 추출 및 계산
            const [param1, param2] = parameterRetrieval(queryParams);
            const result = simpleCalc(param1, param2);

            // 2. GET 응답 생성
            const getResponse = `GET request for calculation => ${param1} x ${param2} = ${result}`;
            res.end(`<html><body>${getResponse}</body></html>`);
            console.log(`## ${getResponse}`);    
        
        // [GET 분기 2: '?' 없는 경우]    
        } else {
            const responseMessage = `<p>HTTP Request GET for Path: ${path}</p>`;
            res.end(`<html><body>${responseMessage}</body></html>`);
            console.log(`## GET request for directory => ${path}.`);
        }
   
        // do_POST (현재는 405로 처리)
        } else {
        console.log(`This server only handles GET request for now`);
        res.writeHead(405);
        res.end(`This server only handles GET request for now`);
        }
    });

// __main__
server.listen(serverPort, serverName, () => {
    console.log(`## HTTP server started at HTTP://${serverName}:${serverPort}.`);

});