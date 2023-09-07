export interface createUserParams {
  name: string;
}
export const createUser = (_: undefined, { name }: createUserParams) => {
  // Lógica para crear un usuario.
  return { id: "12345", name };
};
