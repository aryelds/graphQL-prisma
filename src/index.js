import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './db.js'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'
import User from './resolvers/User'
import Post from './resolvers/Post'
import Comment from './resolvers/Comment'
import './prisma'

const pubsub = new PubSub();

const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Post,
    Comment
};

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: {
        db,
        pubsub
    }
});

server.start(() => {
   console.log('The server is up!')
});