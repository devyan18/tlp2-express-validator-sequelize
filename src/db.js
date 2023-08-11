import { connect } from 'mongoose';

export async function createConnection () {
  await connect('mongodb://localhost:27017/node_express-validator')
    .then((info) => console.log(`Connected to: ${info.connections[0].db.databaseName}`))
    .catch((error) => console.log(`Error: ${error}`));
}
