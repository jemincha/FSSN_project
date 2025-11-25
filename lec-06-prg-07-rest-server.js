const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ exrended: true }));

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

console.log("## tset: MembershipHandler calss implemention completed.")