const { request, response } = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/users', (request, response) => {
    return response.status(200).json({ message: 'Hello world' })
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})