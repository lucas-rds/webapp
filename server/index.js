import app from './server';
import models from './database/models';

const PORT = process.env.PORT || 80;

models.sequelize.sync()
    .then(() => {
        app.listen(PORT);
        console.log(`Listening server in port: ${PORT}`);
    })
    .catch(console.log);
