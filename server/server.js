import express from 'express';

const server = express();
const PORT = process.env.PORT || 3000;

server.get('/', (req, res) => {
    res.send('HW!');
});

server.listen(PORT, () => {
    console.log('JSON Server is running on port ' + PORT);
});