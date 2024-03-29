import { MongoClient } from 'mongodb';

let db;

async function connectToDb(cb)  {
    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster1.g3ljlos.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`);
    await client.connect();

    db = client.db('react-blog-db');
    cb();
}


export {
    db,
    connectToDb
};