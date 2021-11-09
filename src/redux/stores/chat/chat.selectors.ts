import AppConfig from '../../../constants/App';
import StoreType from '../../Store.type';
import { ChatStateType, Message } from './chat.state';

export const selectChatStore = (state: StoreType): ChatStateType => state.chat;

export const selectAllMessagesStore = (state: StoreType): Message[] =>
  selectChatStore(state).messages;

export const selectInitialMessagesStore = (state: StoreType): Message[] => {
  const messages = selectChatStore(state).messages;
  const indexEnd =
    AppConfig.messagePerPage > messages.length
      ? messages.length
      : AppConfig.messagePerPage;
  return messages.slice(0, indexEnd).reverse();
};

export const selectChatTurnBotStore = (state: StoreType): boolean =>
  selectChatStore(state).turnForBot;

export const selectChatTypingBotStore = (state: StoreType): boolean => {
  return selectChatStore(state).botTyping;
};
