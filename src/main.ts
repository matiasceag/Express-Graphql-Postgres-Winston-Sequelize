import "graphql-import-node";
import { Sequelize, Dialect } from "sequelize";
import config from "./config/config.json";
import { logger } from "./config/winston";
import { ENV } from "./config/enviroment";

const { database, username, password, ...rest } = config[ENV];

export const sequelize = new Sequelize(database, username, password, {
  ...rest,
  dialect: rest.dialect as Dialect,
});

const TAG = "[SEQUELIZE]: ";
async function bootstrap() {
  const logerService = logger.child({});
  try {
    await sequelize.sync();
    logerService.info({
      msg: TAG + "init",
    });
    // Importa y ejecuta el servidor Express y Apollo una vez sincronizado.
    require("./server");
  } catch (err) {
    console.log(err);
    logerService.error({
      msg: TAG + "error",
      err,
    });
  }
}

bootstrap();
