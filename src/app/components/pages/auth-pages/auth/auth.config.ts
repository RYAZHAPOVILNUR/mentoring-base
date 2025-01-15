import { Auth } from '../../../../interfaces/auth.interface';

export const data = {
  authData: null,
};

export const authData = (admin: Auth, id: number, isAdmin: boolean) => {
  return {
    ...admin,
    id,
    isAdmin,
  };
};
