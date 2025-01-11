export interface User {
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
  company: {
    name: string;
    catchPhrase?: string;
    bs?: string;
  };
}
