import http from 'http';
import app from './app';
import chalk from 'chalk'; // fancy text :)
import { serverPort, databaseAddress } from './config.json';

import mongoose from 'mongoose';
import connectionEvents from './mongo/connectionEvents'; // database connection events
const { connect, connection } = mongoose;

const port = process.env.PORT || serverPort || 3001;

const server = http.createServer(app);

// handle connection events
for (const event of connectionEvents) {
  if ('once' in event && event.once) {
    connection.once(event.name, (...args) => event.execute(...args));
  } else {
    connection.on(event.name, (...args) => event.execute(...args));
  }
}

// connect to database
(async () => {
  await connect(databaseAddress).catch(console.error);
})();

// start server
server.listen(port, () => {
  console.log(chalk.green(`Now listening on port ${port}...`));
});
