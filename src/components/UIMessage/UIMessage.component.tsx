import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { UIMessageStyled, UIMessageTextStyled } from './UIMessage.styled';
import { Message } from '../../redux/stores/chat/chat.state';

interface UIMessageProps {
  message: Message;
}

const UIMessage: FC<UIMessageProps> = ({ message }) => {
  const isBot = message.bot || false;
  return (
    <View style={{ alignItems: isBot ? 'flex-start' : 'flex-end' }}>
      <UIMessageStyled isBot={isBot}>
        <UIMessageTextStyled isBot={isBot}>
          {message.message}
        </UIMessageTextStyled>
      </UIMessageStyled>
    </View>
  );
};

UIMessage.propTypes = {
  message: PropTypes.shape({
    bot: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default UIMessage;
