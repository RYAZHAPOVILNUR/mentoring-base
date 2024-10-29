export interface ICreateUser {
  id: number;
  name: string;
  email: string;
  website: string;
  company: {
    name: string,
  }
}
