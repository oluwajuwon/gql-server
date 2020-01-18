// import "reflect-metadata";
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';
import * as session from 'express-session';

import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const startServer = async () => {
    const server = new ApolloServer({
        // These will be defined for both new or existing servers
        typeDefs,
        resolvers,
        context: ({ req }: any) => ({ req })
    });

    await createConnection();

    const app = express();

    app.use(session ({
        secret: 'boooky',
        resave: false,
        saveUninitialized: false,
    }))

    server.applyMiddleware({ app })
    // Additional middleware can be mounted at this point to run before Apollo.
    app.listen({ port: 4000 }, () => {
        console.log(`server running at http://localhost:4000${server.graphqlPath}`)
    })
};

startServer();


