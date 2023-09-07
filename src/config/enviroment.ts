type Environment = "development" | "test" | "production";
type EnvState = "local" | "staging" | "test" | "production";
const sequelizeTransformer = {
  local: "development",
  staging: "development",
  test: "test",
  production: "production",
};
const ENV =
  (sequelizeTransformer[process.env.ENV as EnvState] as Environment) ||
  "development";

export { ENV };
