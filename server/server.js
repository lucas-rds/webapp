import express from 'express';
import models from './database/models';

const PORT = process.env.PORT || 80;
const server = express();

server.use(express.static('public'));
server.get('/deaths', (req, res) => {
    models.Death.findAll()
        .then(deaths => res.send(deaths))
        .catch(err => {
            res.status(400);
            res.send(err);
            console.log(err)
        });
})

models.sequelize.sync().then(() => {
    server.listen(PORT);
    console.log(`Listening server in port: ${PORT}`);
}).catch(err => console.log(err));
