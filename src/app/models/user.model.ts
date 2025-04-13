export interface User {
    id: number;
    username: string;
    email: string;
    password?: string;
    favorites: number[];
    searchHistory: string[];
  }