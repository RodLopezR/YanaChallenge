import styled from 'styled-components/native';
import Palette from '../../theme/palette';

export const UIButtonStyled = styled.View`
  background-color: ${Palette.primary.color};
  padding: 20px;
  border-radius: 50px;
`;

export const UIButtonTextStyled = styled.Text`
  color: ${Palette.primary.dark};
  font-weight: bold;
  text-align: center;
  font-size: 20px;
`;
