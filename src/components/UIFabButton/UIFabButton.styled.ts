import styled from 'styled-components/native';
import Palette from '../../theme/palette';

interface UIFabButtonStyled {
  size: number;
  disabled: boolean;
}

export const UIFabButtonStyled = styled.View<UIFabButtonStyled>`
  background-color: ${props =>
    props.disabled ? Palette.normal.color : Palette.primary.color};
  padding: 20px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50px;
`;

export const UIFabButtonTextStyled = styled.Text<UIFabButtonStyled>`
  color: ${props =>
    props.disabled ? Palette.normal.dark : Palette.primary.dark};
  font-weight: bold;
  text-align: center;
  font-size: 20px;
`;
