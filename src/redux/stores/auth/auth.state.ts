export type UserType = {
  name: string;
  email: string;
  password: string;
};

export type AuthStateType = {
  isLogged: boolean;
  user: UserType;
};

const State: AuthStateType = {
  isLogged: false,
  user: {
    name: '',
    email: '',
    password: '',
  },
};

export default State;
