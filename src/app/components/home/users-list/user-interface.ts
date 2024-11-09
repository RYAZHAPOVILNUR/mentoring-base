export interface User {
  id: number;
  name: string;
  username?: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website: string;
  company: {
    name: string;
    catchPhrase?: string;
    bs?: string;
  };
}

export interface CreateUser {
  id: number;
  name: string;
  email: string;
  phone?: string;
  website: string;
  company: {
    name: string;
  };
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// export interface UserForm {
//   id: number;
//   name: string;
//   username?: string;
//   email: string;
//   address?: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: {
//       lat: string;
//       lng: string;
//     };
//   };
//   phone?: string;
//   website: string;
//   company: {
//     name: string;
//     catchPhrase?: string;
//     bs?: string;
//   };
//   companyName: string;
// }
