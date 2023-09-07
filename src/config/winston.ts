import winston from "winston";

const loggerOptions: winston.LoggerOptions = {
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "info.log", level: "info" }),
  ],
};

// Si estamos en desarrollo, también imprimimos en la consola.
if (process.env.NODE_ENV !== "production") {
  (loggerOptions.transports as winston.transport[]).push(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

export const logger = winston.createLogger(loggerOptions);
