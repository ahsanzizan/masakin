export type AuthUser = {
  sub: string | null;
  createdAt: Date | null;
  username: string | null;
  email: string | null;
  avatar: string | null; // Image URL of the avatar
};
