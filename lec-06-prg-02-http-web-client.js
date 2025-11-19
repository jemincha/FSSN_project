const serverName = 'localhost';
const serverPort = 8080;
const serverUrl = `http://${serverName}:${serverPort}`;

async function runClient() {
    console.log("## HTTP client started.");

    // 1. GET request (단순 경로)
    console.log(`## GET request for ${serverUrl}/temp/`);
    try {
        const res = await fetch(`${serverUrl}/temp/`);
        const text = await res.text();
        console.log("## GET response [start]");
        console.log(text);
        console.log("## GET response [end]");
    } catch (err) {
        console.error("Error:", err.message);
    }

    // 2. GET request (쿼리 파라미터 포함)
    console.log(`## GET request for ${serverUrl}/?var1=9&var2=9`);
    try {
        const res = await fetch(`${serverUrl}/?var1=9&var2=9`);
        const text = await res.text();
        console.log("## GET response [start]");
        console.log(text);
        console.log("## GET response [end]");
    } catch (err) {
        console.error("Error:", err.message);
    }

    // 3. POST request (Body 데이터 포함)
    console.log(`## POST request for ${serverUrl}/ with var1 is 9 and var2 is 9`);
    try {
        const params = new URLSearchParams();
        params.append('var1', '9');
        params.append('var2', '9');

        const res = await fetch(serverUrl, {
            method: 'POST',
            body: params
        });
        const text = await res.text();
        
        console.log("## POST response [start]");
        console.log(text);
        console.log("## POST response [end]");
    } catch (err) {
        console.error("Error:", err.message);
    }

    console.log("## HTTP client completed.");
}

// 클라이언트 실행
runClient();