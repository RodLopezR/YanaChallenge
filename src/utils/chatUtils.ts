import AppConfig from '../constants/App';
import { ChatStateType, Message } from '../redux/stores/chat/chat.state';

export const getInitialChat = (state: ChatStateType): Message[] => {
  const messages = state.messages;
  const indexStart =
    AppConfig.messagePerPage >= messages.length
      ? 0
      : messages.length - AppConfig.messagePerPage;
  const result = messages.slice(indexStart, messages.length).reverse();
  return result;
};

export const getSectionChat = (
  state: ChatStateType,
  indexSize: number,
): Message[] => {
  const messages = state.messages;
  if (messages.length < indexSize) return [];
  const _indexEnd = messages.length - indexSize;
  const indexEnd = _indexEnd < 0 ? 0 : _indexEnd;

  const _indexStart = indexEnd - AppConfig.messagePerPage;
  const indexStart = _indexStart < 0 ? 0 : _indexStart;

  const result = messages.slice(indexStart, indexEnd).reverse();
  return result;
};
