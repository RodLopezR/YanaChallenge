import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import State, { UserType } from './auth.state';

const authSlice = createSlice({
  name: 'auth',
  initialState: State,
  reducers: {
    login(prevState, action: PayloadAction<UserType>) {
      prevState.isLogged = true;
      prevState.user = action.payload;
    },
    logOut(prevState) {
      prevState.isLogged = false;
      prevState.user = {
        name: '',
        email: '',
        password: '',
      };
    },
  },
});

export const { login, logOut } = authSlice.actions;
export default authSlice.reducer;
