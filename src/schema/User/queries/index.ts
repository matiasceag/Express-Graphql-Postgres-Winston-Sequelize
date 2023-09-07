import baseTypes from "./baseTypes.graphql"; // Asegurándose de que esto se importe primero
import getUser from "./getUser.graphql";

export const userQueries = [baseTypes, getUser];
