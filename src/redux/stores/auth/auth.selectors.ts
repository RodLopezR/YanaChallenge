import StoreType from '../../Store.type';
import { AuthStateType, UserType } from './auth.state';

export const selectAuthStore = (state: StoreType): AuthStateType => state.auth;

export const selectAuthUserStore = (state: StoreType): UserType =>
  selectAuthStore(state).user;
