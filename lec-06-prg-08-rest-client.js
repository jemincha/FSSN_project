const BASE_URL = 'http://localhost:5000/membership_api';

async function runClient() {
    console.log("## REST client started.");

    try {
        let res = await fetch(`${BASE_URL}/0001`);
        let json = await res.json();
        console.log("#1 Code:", res.status, ">>", "JSON:", JSON.stringify(json), ">>", "JSON Result:", json['0001']);

        const params2 = new URLSearchParams();
        params2.append('0001', 'apple');

        res = await fetch(`${BASE_URL}/0001`, {
            method: 'POST', 
            body: params2
        });
        json = await res.json();
        console.log("#2 Code:", res.status, ">>", "JSON:", JSON.stringify(json), ">>", "JSON Result:", json['0001']);
    
        res = await fetch(`${BASE_URL}/0001`);
        json = await res.json();
        console.log('#3 Code:', res.status, ">>", "JSON:", JSON.stringify(json), ">>", "JSON Result:", json['0001']);
    
        const params4 = new URLSearchParams();
        params4.append('0001', 'xpple');

        res = await fetch(`${BASE_URL}/0001`, {
            method: 'POST', 
            body: params4
        });
        json = await res.json();
        console.log("#4 Code:", res.status, ">>", "JSON:", JSON.stringify(json), ">>", "JSON Result:", json['0001']);
    } catch (error) {
        console.error("Error:", error);
    }
}

runClient();