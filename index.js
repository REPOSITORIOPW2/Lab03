const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs');
const { message } = require('statuses');
const database = require('mime-db');

app.use(express.static('pub'));
app.listen(3000, () => {
    console.log("Escuchando en: http://localhost:3000")

});

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'));
});
app.get('/archivos', (request, response) => {
    fs.readdir(path.resolve(__dirname,'priv/'),
    (err, files) => {
        if (err) {
            console.error(err)
            response.status(500).json({
                error: 'message'
            })
            return
        }
        response.json({
            data: files
        })
    });
});