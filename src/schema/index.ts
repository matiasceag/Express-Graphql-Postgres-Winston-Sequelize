import { mergeTypeDefs } from "@graphql-tools/merge";
import { userSchemas } from "./User";

export const typeDefs = mergeTypeDefs([...userSchemas]);
