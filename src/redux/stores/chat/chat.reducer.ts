import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import State, { Message } from './chat.state';

const chatSlice = createSlice({
  name: 'chat',
  initialState: State,
  reducers: {
    addMessage(prevState, action: PayloadAction<Message>) {
      const dateFormated = new Date().getTime().toString();
      action.payload.date = dateFormated;

      prevState.messages.push(action.payload);
      prevState.turnForBot = !action.payload.bot;
    },
    typingBotStart(prevState) {
      prevState.botTyping = true;
    },
    typingBotEnd(prevState) {
      prevState.botTyping = false;
    },
    cleanAll(prevState) {
      prevState.messages = [];
      prevState.turnForBot = true;
    },
  },
});

export const { addMessage, cleanAll, typingBotStart, typingBotEnd } =
  chatSlice.actions;
export default chatSlice.reducer;
