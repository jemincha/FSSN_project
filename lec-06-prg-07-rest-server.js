const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ expended: true }));

// MembershipHandler 클래스 정의
class MembershipHandler {
    constructor() {
        this.database = {};
    }

    // POST request
    create(id, value) {
        if (id in this.database) {
            return { [id]: "None" };
        } else {
            this.database[id] = value;
            return { [id]: this.database[id] };
        }
    }

    // GET request
    read(id) {
        if (id in this.database) {
            return { [id]: this.database[id] };
        } else {
            return { [id]: "None" };
        }
    }

    // PUT request
    update(id, value) {
        if (id in this.database) {
            this.database[id] = value;
            return { [id]: this.database[id] };
        } else {
            return { [id]: "None" };
        }
    }

    // DELETE request
    delete(id) {
        if (id in this.database) {
            delete this.database[id];
            return { [id]: "Removed" };
        } else {
            return { [id]: "None" };
        }
    }
}

const myManager = new MembershipHandler();

// Create handler
app.post('/membership_api/:member_id', (req, res) => {
    const memberId = req.params.member_id;
    const value = req.body[memberId];
    const result = myManager.create(memberId, value);
    res.json(result);
});

// Remove handler
app.get('/membership_api/:member_id', (req, res) => {
    const memberId = req.params.member_id;
    const result = myManager.read(memberId);
    res.json(result);
});

// Update handler
app.put('/membership_api/:member_id', (req, res) => {
    const memberId = req.params.member_id;
    const value = req.body[memberId];
    const result = myManager.update(memberId, value);
    res.json(result);
});

// Delete handler
app.delete('/membership_api/:member_id', (req, res) => {
    const memberId = req.params.member_id;
    const result = myManager.delete(memberId);
    res.json(result);    
});

// 서버 실행
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`## REST server started at http://localhost:${PORT}`);
});