const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ expended: true }));

// MembershipHandler 클래스 정의
class MembershipHandler {
    constructor() {
        this.database = {};
    }

    create(id, value) {
        if (id in this.database) {
            return { [id]: "None" };
        } else {
            this.database[id] = value;
            return { [id]: this.database[id] };
        }
    }

    read(id) {
        if (id in this.database) {
            return { [id]: this.database[id] };
        } else {
            return { [id]: "None" };
        }
    }

    update(id, value) {
        if (id in this.database) {
            this.database[id] = value;
            return { [id]: this.database[id] };
        } else {
            return { [id]: "None" };
        }
    }

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

// 라우팅 설정
app.post('/membership_api/:member_id', (req, res) => {
    const memberId = req.params.member_id;
    const value = req.body[memberId];
    const result = myManager.create(memberId, value);
    res.json(result);
});

app.get('/membership_api/:member_id', (req, res) => {
    const memberId = req.params.member_id;
    const result = myManager.read(memberId);
    res.json(result);
});

app.put('/membership_api/:member_id', (req, res) => {
    const memberId = req.params.member_id;
    const value = req.body[memberId];
    const result = myManager.update(memberId, value);
    res.json(result);
});

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