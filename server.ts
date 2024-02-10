import http from 'http';
import app from './app';
import chalk from 'chalk';

const port = process.env.PORT || 3001;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(chalk.green(`Now listening on port ${port}...`))
});