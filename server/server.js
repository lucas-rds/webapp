import express from 'express';
import { Death } from './database/models';
import graphqlHttp from './graphs/http';

const PORT = process.env.PORT || 80;
const app = express();

app.use(express.static('public'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next()
})

app.get('/deaths', (req, res) => {
    Death.findAll()
        .then(data => res.send(data))
        .catch(err => {
            res.status(400);
            res.send(err);
            console.log(err)
        });
});

app.use('/graph', graphqlHttp);

export default app;