export interface Auth {
  address?: {
    geo: {
      lat: string;
      lng: string;
    };
  };
  name: string;
  email: string;
  phone: string;
  website: string;
  id: number;
  isAdmin: boolean;
  company: {
    name: string;
    catchPhrase?: string;
    bs?: string;
  };
}
