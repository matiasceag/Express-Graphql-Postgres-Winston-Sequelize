import { Request } from "express";
import { logger } from "../config/winston";

type Context = {
  logger: typeof logger;
};
export const createContext = ({ req }: { req: Request }): Context => {
  const logerService = logger.child({});
  return {
    logger: logerService,
  };
};
