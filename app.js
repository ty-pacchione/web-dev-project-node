import express from 'express';
const app = express();
app.get('/', (req, res) => {res.send('Server')})
app.listen(4000);