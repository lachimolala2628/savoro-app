const express = require('express');
const app = express();

app.get('/', (res, req) => {
    res.setEncoding('Hello World')
})

module.exports = app;