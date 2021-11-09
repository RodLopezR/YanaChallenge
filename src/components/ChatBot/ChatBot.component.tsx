import React, { FC, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import StoreType from '../../redux/Store.type';
import { asyncAddBotMessage } from '../../redux/stores/chat/chat.middleware';
import {
  selectChatTurnBotStore,
  selectChatTypingBotStore,
} from '../../redux/stores/chat/chat.selectors';
import Palette from '../../theme/palette';

const ChatBot: FC = () => {
  const dispatch = useDispatch();
  const turnForBot = useSelector<StoreType>(selectChatTurnBotStore);
  const typingBot = useSelector<StoreType>(selectChatTypingBotStore);

  useEffect(() => {
    if (turnForBot) {
      dispatch(asyncAddBotMessage());
    }
  }, [dispatch, turnForBot]);

  if (typingBot) {
    return (
      <View
        style={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20 }}>
        <View
          style={{
            backgroundColor: Palette.secondary.dark,
            width: 100,
            paddingBottom: 10,
            borderRadius: 50,
          }}>
          <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
            ...
          </Text>
        </View>
      </View>
    );
  }
  return <View />;
};

export default ChatBot;
