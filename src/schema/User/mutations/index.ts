import baseTypes from "./baseTypes.graphql"; // Asegurándose de que esto se importe primero
import createUser from "./createUser.graphql";

export const userMutations = [baseTypes, createUser];
