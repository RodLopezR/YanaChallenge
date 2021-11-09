import { AuthStateType } from './stores/auth/auth.state';
import { ChatStateType } from './stores/chat/chat.state';

interface StoreType {
  auth: AuthStateType;
  chat: ChatStateType;
}

export default StoreType;
