export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  addres: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: number,
      lng: number
    }
  },
  phone: number,
  website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
  }
}

