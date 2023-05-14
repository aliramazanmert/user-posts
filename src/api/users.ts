import axios from "../axios";

export const getUsers = async () => {
  const { data } = await axios.get("/users");

  return data;
};

export const getUserWithId = async (id: string | undefined) => {
  const { data } = await axios.get(`/users/${id}`);

  return data;
};
