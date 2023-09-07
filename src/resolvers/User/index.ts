import { userMutationResolvers } from "./mutations";
import { userQueriesResolvers } from "./queries";

export const userResolvers = {
  Query: userQueriesResolvers,
  Mutation: userMutationResolvers,
};
