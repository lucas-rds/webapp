import { GraphQLSchema, GraphQLString, GraphQLObjectType } from 'graphql';

let playerObjectType = new GraphQLObjectType({
    name: "playerObject",
    fields: () => ({
        "name": {
            type: GraphQLString,
            resolve: (root, args) => root.name,
        }
    })
});


let queryPlayerType = new GraphQLObjectType({
    name: "player",
    fields: () => ({
        "player": {
            type: playerObjectType,
            resolve: (root, args) => ({
                name:"Lucas"
            }),
        }
    })
});

let playerSchema = new GraphQLSchema({
    query: queryPlayerType
});

export default playerSchema;