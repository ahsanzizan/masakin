export interface PaginatedResult<T> {
  data: T[];
  meta: {
    total: number;
    lastPage: number;
    currentPage: number;
    perPage: number;
    prev: number | null;
    next: number | null;
  };
}

export interface UserWithoutPassword {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  bio: string | null;
  avatar: string;
}

export interface Recipe {
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
}

export interface Followership {
  id: string;
  createdAt: Date;
  followerId: string;
  followingId: string;
}
