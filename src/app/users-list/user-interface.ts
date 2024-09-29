export interface User {
  id: number;
  name: string;
  username?: string;
  website: string;
  email: string;
  company: {
    name: string;
  };
}