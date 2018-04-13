import express from 'express';


const PORT = process.env.PORT || 80;
const server = express();
server.use(express.static('public'));
server.listen(PORT);
console.log(`Listening server in port: ${PORT}`);
