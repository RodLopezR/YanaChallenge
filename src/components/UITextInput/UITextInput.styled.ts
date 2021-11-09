import styled from 'styled-components/native';
import Palette from '../../theme/palette';

export const UITextInputStyled = styled.TextInput`
  background-color: ${Palette.secondary.ligth};
  padding: 25px 20px;
  border-radius: 30px;
  font-size: 18px;
  color: ${Palette.normal.dark};
`;
