import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import UIFabButton from '../UIFabButton';
import UITextInput from '../UITextInput';
import StoreType from '../../redux/Store.type';
import { addMessage } from '../../redux/stores/chat/chat.reducer';
import { selectChatTurnBotStore } from '../../redux/stores/chat/chat.selectors';

const ChatInput = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const turnForBot = useSelector<StoreType, boolean>(selectChatTurnBotStore);

  const handleAddMessage = () => {
    if (message === '') return;
    dispatch(addMessage({ bot: false, message: message, date: '' }));
    setMessage('');
  };

  const disabledButton = message.length === 0 || turnForBot;
  return (
    <View style={{ height: 70, paddingHorizontal: 20, flexDirection: 'row' }}>
      <View style={{ flex: 1 }}>
        <UITextInput
          value={message}
          placeholder="Ingresa aquí tu mensaje"
          onChangeText={setMessage}
        />
      </View>

      <UIFabButton
        style={{ marginLeft: 10 }}
        onPress={handleAddMessage}
        size={70}
        disabled={disabledButton}>
        +
      </UIFabButton>
    </View>
  );
};

export default ChatInput;
