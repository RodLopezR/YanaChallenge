import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthReducer from '../stores/auth/auth.reducer';
import ChatReducer from '../stores/chat/chat.reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'chat'],
};

const rootReducer = combineReducers({
  auth: AuthReducer,
  chat: ChatReducer,
});

export default persistReducer(persistConfig, rootReducer);
