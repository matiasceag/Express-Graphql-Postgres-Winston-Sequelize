import User from "./User.graphql";
import { userMutations } from "./mutations";
import { userQueries } from "./queries";

export const userSchemas = [User, ...userMutations, ...userQueries];
