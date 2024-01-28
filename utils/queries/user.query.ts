import { PaginatedResult, UserWithoutPassword } from "../../types/entities";
import { fetchApiWithAuth, isSuccess } from "../api";

export const getUsers = async (page?: number, search?: string) => {
  const paginatedUsers = await fetchApiWithAuth<
    PaginatedResult<UserWithoutPassword>
  >(`/users?page=${page}?search=${search}`);
  if (!isSuccess(paginatedUsers)) {
    throw new Error(
      `Fetch users responded with status ${paginatedUsers.statusCode}${
        paginatedUsers.message ? ` "${paginatedUsers.message}"` : ""
      }`
    );
  }

  return paginatedUsers;
};

export const getUserById = async (id: string) => {
  const user = await fetchApiWithAuth<UserWithoutPassword>(`/users/${id}`);
  if (!isSuccess(user)) {
    throw new Error(
      `Fetch user responded with status ${user.statusCode}${
        user.message ? ` "${user.message}"` : ""
      }`
    );
  }

  return user;
};
