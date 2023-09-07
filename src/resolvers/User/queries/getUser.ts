export interface getUserParams {
  id: number;
}
export const getUser = (_: undefined, { id }: getUserParams) => {
  // Lógica para obtener un usuario.
  return { id, name: "John Doe" };
};
