import { GraphQLSchema, GraphQLString, GraphQLObjectType } from 'graphql';

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "death",
        fields: () => ({
            "death": {
                "type": GraphQLString,
                "args": {
                    
                }
            }
        })
    })
});

export default schema;