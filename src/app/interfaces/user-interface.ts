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
    }
  },
  phone?: string;
  website: string;
  company: {
    name: string;
    catchPhrase?: string;
    bs?: string;
}
}

export interface CreateUser {
  id: number;
  name: string;
  email: string;
  website: string;
  companyName: string;
}

export interface EditUser {
  id: number;
  name: string;
  email: string;
  website: string;
  companyName: string;
}