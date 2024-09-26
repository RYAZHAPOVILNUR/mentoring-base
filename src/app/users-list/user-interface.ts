export interface User {
  id: number;
  name: string;
  username: string;
  wedsite: string;
  email: string;
  company: {
    name: string;
  };
}