import { store } from '../../config/store';
import Messages, { MapOfPrhases } from '../../../data/BotChat';
import { addMessage, typingBotEnd, typingBotStart } from './chat.reducer';

const GetRandomPhrase = (): string => {
  const randomIndex = Math.ceil(Math.random() * 10);

  if (randomIndex > MapOfPrhases.length) {
    return MapOfPrhases[MapOfPrhases.length - 1];
  }
  return MapOfPrhases[randomIndex];
};

export const asyncAddBotMessage = () => async (dispatch: any) => {
  const messages = store.getState().chat.messages;
  const indexMessage = messages.length === 0 ? 0 : messages.length / 2;

  return new Promise((resolve, _) => {
    setTimeout(() => {
      dispatch(typingBotStart());
      setTimeout(() => {
        dispatch(typingBotEnd());
        setTimeout(() => {
          /**
           * LOGIC FOR MESSAGES
           */
          //SCRIPT BOT
          let message = '';
          if (indexMessage < Messages.length) {
            message = Messages[indexMessage].text;
          }

          //NO SCRIPT - RANDOM MESSAGE
          if (message === '') {
            message = GetRandomPhrase();
          }
          dispatch(addMessage({ bot: true, message, date: '' }));
          resolve('');
        }, 100);
      }, 5000);
    }, 1000);
  });
};
