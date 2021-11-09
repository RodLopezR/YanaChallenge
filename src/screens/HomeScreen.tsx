import React, { FC } from 'react';
import { View } from 'react-native';

import ChatBot from '../components/ChatBot';
import ChatList from '../components/ChatList';
import ChatInput from '../components/ChatInput';

const HomeScreen: FC = () => (
  <View style={{ flex: 1, paddingTop: 0, paddingBottom: 20 }}>
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        marginBottom: 20,
      }}>
      <ChatList />
      <ChatBot />
    </View>
    <ChatInput />
  </View>
);

export default HomeScreen;
