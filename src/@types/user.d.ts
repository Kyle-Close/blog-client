export interface IUser {
  id: string;
  username: string;
  isAuthor: boolean;
}
export type UserContextType = {
  user: IUser | null;
  login: (user: IUser, token: string) => void;
  logout: () => void;
  updateUser: (any) => void;
};

export interface UserProviderProps {
  children: React.ReactNode;
}
