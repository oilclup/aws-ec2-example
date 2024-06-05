const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.get('/contact', (req, res) => {
    res.send('Contact Us');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
