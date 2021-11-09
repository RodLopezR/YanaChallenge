import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { UIButtonStyled, UIButtonTextStyled } from './UIButton.styled';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface UIButtonProps extends TouchableOpacityProps {
  title: string;
}

const UIButton: FC<UIButtonProps> = ({ title, ...restProps }) => {
  return (
    <TouchableOpacity {...restProps} activeOpacity={0.8}>
      <UIButtonStyled>
        <UIButtonTextStyled>{title}</UIButtonTextStyled>
      </UIButtonStyled>
    </TouchableOpacity>
  );
};

UIButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

UIButton.defaultProps = {
  onPress: undefined,
};

export default UIButton;
