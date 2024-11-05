export interface User {
  id: number;
  name: string;
  username?: string;
  email: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
  }
  isAdmin: boolean;
}
export interface CreateUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
   name: string
  }
}
export interface UserState {
 name: string;
 email: string;
 isAdmin: boolean;
}