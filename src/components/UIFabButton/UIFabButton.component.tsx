import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { UIFabButtonStyled, UIFabButtonTextStyled } from './UIFabButton.styled';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface UIFabButtonProps extends TouchableOpacityProps {
  size?: number;
}

const UIFabButton: FC<UIFabButtonProps> = ({ size = 50, children, ...restProps }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} {...restProps}>
      <UIFabButtonStyled size={size} disabled={restProps.disabled || false}>
        <UIFabButtonTextStyled
          size={size}
          disabled={restProps.disabled || false}>
          {children }
        </UIFabButtonTextStyled>
      </UIFabButtonStyled>
    </TouchableOpacity>
  );
};

UIFabButton.propTypes = {
  size: PropTypes.number,
  onPress: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.bool,
};

UIFabButton.defaultProps = {
  size: 50,
  onPress: undefined,
  style: undefined,
  disabled: false,
};

export default UIFabButton;
