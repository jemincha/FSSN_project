const BASE_URL = 'http://localhost:5000/membership_api';

async function runClient() {
    console.log("## REST client started.");

    try {
        // 1. Read - Non registered (error)
        let res = await fetch(`${BASE_URL}/0001`);
        let json = await res.json();
        console.log("#1 Code:", res.status, ">>", "JSON:", JSON.stringify(json), ">>", "JSON Result:", json['0001']);

        // 2. Create - new (non error)
        const params2 = new URLSearchParams();
        params2.append('0001', 'apple');

        res = await fetch(`${BASE_URL}/0001`, {
            method: 'POST', 
            body: params2
        });
        json = await res.json();
        console.log("#2 Code:", res.status, ">>", "JSON:", JSON.stringify(json), ">>", "JSON Result:", json['0001']);
    
        // 3. Read - registered (non error)
        res = await fetch(`${BASE_URL}/0001`);
        json = await res.json();
        console.log('#3 Code:', res.status, ">>", "JSON:", JSON.stringify(json), ">>", "JSON Result:", json['0001']);
    
        // 4. Create - already registered (error)
        const params4 = new URLSearchParams();
        params4.append('0001', 'xpple');

        res = await fetch(`${BASE_URL}/0001`, {
            method: 'POST', 
            body: params4
        });
        json = await res.json();
        console.log("#4 Code:", res.status, ">>", "JSON:", JSON.stringify(json), ">>", "JSON Result:", json['0001']);

        // 5. Update - Non registered (error)
        const params5 = new URLSearchParams();
        params5.append('0002', 'xrange');
        res = await fetch(`${BASE_URL}/0002`, {
            method: 'PUT',
            body: params5
        });
        json = await res.json();
        console.log("#5 Code:", res.status, ">>", "JSON:", JSON.stringify(json), ">>", "JSON Result:", json['0002']);

        // 6. Update - registered (non error)
        const params6_create = new URLSearchParams();
        params6_create.append('0002', 'xrange');
        await fetch(`${BASE_URL}/0002`, {
            method: 'POST',
            body: params6_create
        });

        const params6_update = new URLSearchParams();
        params6_update.append('0002', 'orange');
        res = await fetch(`${BASE_URL}/0002`, {
            method: 'PUT', 
            body: params6_update
        });
        json = await res.json();
        console.log("#6 Code:", res.status, ">>", "JSON:", JSON.stringify(json), ">>", "JSON Result:", json['0002']);
    
        // 7. Delete - registered (non error)
        res = await fetch(`${BASE_URL}/0001`, {
            method: 'DELETE'    
        });
        json = await res.json();
        console.log("#7 Code:", res.status, ">>", "JSON:", JSON.stringify(json), ">>", "JSON Result:", json['0001']);

        // 8. Delete - Non registered (non error)
        res = await fetch(`${BASE_URL}/0001`, {
            method: 'DELETE'
        });
        json = await res.json();
        console.log("#8 Code:", res.status, ">>", "JSON:", JSON.stringify(json), ">>", "JSON Result:", json['0001']);
    
    } catch (error) {
        console.error("Error:", error);
    }
}

runClient();