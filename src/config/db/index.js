const mongoose = require("mongoose");

function connect() {
    try {
        mongoose.connect("mongodb://127.0.0.1/blog", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log("Connect successfully!!");
    } catch (error) {
        console.log("Connect db fail:", error);
    }
}

module.exports = { connect };
