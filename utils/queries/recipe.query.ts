import { PaginatedResult, Recipe } from "../../types/entities";
import { fetchApiWithAuth, isSuccess } from "../api";

export const getRecipes = async (page?: number, search?: string) => {
  const paginatedRecipes = await fetchApiWithAuth<PaginatedResult<Recipe>>(
    `/recipes?page=${page}?search=${search}`
  );
  if (!isSuccess(paginatedRecipes)) {
    throw new Error(
      `Fetch recipes responded with status ${paginatedRecipes.statusCode}${
        paginatedRecipes.message ? ` "${paginatedRecipes.message}"` : ""
      }`
    );
  }

  return paginatedRecipes;
};

export const getRecipeById = async (id: string) => {
  const recipe = await fetchApiWithAuth<Recipe>(`recipes/${id}`);
  if (!isSuccess(recipe)) {
    throw new Error(
      `Fetch recipes responded with status ${recipe.statusCode}${
        recipe.message ? ` "${recipe.message}"` : ""
      }`
    );
  }

  return recipe;
};
