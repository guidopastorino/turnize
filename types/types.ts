export type UserRole = 'user' | 'admin'

export type UserState = {
  restId: string | null;
  role: UserRole | null;
  fullname: string | null;
  email: string | null;
  createdAt: Date | null;
}
