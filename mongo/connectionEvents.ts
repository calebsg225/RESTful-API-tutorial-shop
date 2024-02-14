import chalk from "chalk";

export default [
  {
    name: "connecting",
    execute(...args: any[]) {
      console.log(chalk.cyan(`[Database Status]: Connecting...`));
    }
  },
  {
    name: "connected",
    execute(...args: any[]) {
      console.log(chalk.green(`[Database Status]: Connected`));
    }
  },
  {
    name: "disconnected",
    execute(...args: any[]) {
      console.log(chalk.red(`[Database Status]: Disconnected`));
    }
  },
  {
    name: "err",
    execute(err: Error) {
      console.log(chalk.bgRed(`An error occured with the database connection:\n${err}`));
    }
  },
];