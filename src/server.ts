import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createContext } from "./utils/apollo";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

async function startApolloServer() {
  const app = express();
  const PORT = 4000;
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: createContext,
  });

  // Añade esta línea:
  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });
  app.get("/", (_, res) => {
    res.send("Ir a /graphql para interactuar con la API GraphQL");
  });

  app.listen(PORT, () => {
    console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
    console.log(
      `📭 GraphQL Playground disponible en http://localhost:${PORT}/graphql`
    );
  });
}

startApolloServer();
