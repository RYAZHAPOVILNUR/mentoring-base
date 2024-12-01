export interface IUser {
    id: number;
    name: string;
    username?: string;
    email: string;
    address?: {
      street: string;
      suite: string;
      zipcode: string;
      city: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      bs?: string;
      catchPhrase?: string;
      name: string;
    };
  }
  