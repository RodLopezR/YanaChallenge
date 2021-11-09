import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { TextInputProps, View } from 'react-native';
import { UITextInputStyled } from './UITextInput.styled';

interface UITextInputProps extends TextInputProps {}

const UITextInput: FC<UITextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  style,
  ...restProps
}) => {
  return (
    <View>
      <UITextInputStyled
        style={style}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...restProps}
      />
    </View>
  );
};

UITextInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  style: PropTypes.object,
};

UITextInput.defaultProps = {
  value: '',
  placeholder: '',
  onChangeText: undefined,
  style: undefined,
};

export default UITextInput;
