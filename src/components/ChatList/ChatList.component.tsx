import React, { useEffect, useState } from 'react';
import { useSelector, useStore } from 'react-redux';
import { FlatList, View } from 'react-native';

import UIMessage from '../UIMessage';
import AppConfig from '../../constants/App';
import { Message } from '../../redux/stores/chat/chat.state';
import { getInitialChat, getSectionChat } from '../../utils/chatUtils';
import { selectChatTurnBotStore } from '../../redux/stores/chat/chat.selectors';

const ChatList = () => {
  const reduxStore = useStore();
  const isBot = useSelector(selectChatTurnBotStore);
  const [prevIndex, setPrevIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const initialMessages = getInitialChat(reduxStore.getState().chat);
    setMessages(initialMessages);
    setIndex(0);
  }, [isBot, reduxStore]);

  useEffect(() => {
    if (index === 0) return;
    if (prevIndex === index) return;
    const newSectionMessage = getSectionChat(reduxStore.getState().chat, index);

    if (newSectionMessage.length === 0) return;
    const finalData = messages.concat(...newSectionMessage);

    setMessages(finalData);
  }, [isBot, index]);

  const handleLoadNewMessages = () => {
    const newIndex = index + AppConfig.messagePerPage;
    setPrevIndex(index);
    setIndex(newIndex);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        inverted
        scrollsToTop
        data={messages}
        removeClippedSubviews
        style={{ paddingHorizontal: 20 }}
        onEndReached={handleLoadNewMessages}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item }) => <UIMessage message={item} />}
      />
    </View>
  );
};
//

export default ChatList;
