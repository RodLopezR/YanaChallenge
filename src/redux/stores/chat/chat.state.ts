export type Message = {
  bot: boolean;
  message: string;
  date: string;
};

export type ChatStateType = {
  messages: Message[];
  turnForBot: boolean;
  botTyping: boolean;
};

const State: ChatStateType = {
  messages: [],
  turnForBot: true,
  botTyping: false,
};

export default State;
