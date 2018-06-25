

import deathSchema from './schemas/death';
import playerSchema from './schemas/player';
import graphqlHTTP from 'express-graphql';

export default graphqlHTTP({
    schema: playerSchema,
    graphiql: true,
})



