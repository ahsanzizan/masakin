import { Recipe, UserWithoutPassword } from "./entities";

export interface RecipeWithAuthor {
  id: string;
  title: string;
  description: string | null;
  vegetarian: boolean;
  vegan: boolean;
  cookDuration: number;
  price: number;
  healthy: boolean;
  sustainable: boolean;
  servings: number;
  dairyFree: boolean;
  glutenFree: boolean;
  ingredients: string | null;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date | null;
  authorId: string;
  likesCount: number;
  author: UserWithoutPassword;
}

export interface LikeWithUser {
  id: string;
  createdAt: Date;
  userId: string;
  recipeId: string;
  user: UserWithoutPassword;
}

export interface LikeWithRecipe {
  id: string;
  createdAt: Date;
  userId: string;
  recipeId: string;
  recipe: Recipe;
}
