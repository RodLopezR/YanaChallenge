import styled from 'styled-components/native';
import Palette from '../../theme/palette';

interface UIMessageStyledProps {
  isBot?: boolean;
}

export const UIMessageStyled = styled.View<UIMessageStyledProps>`
  background-color: ${props =>
    props.isBot ? Palette.secondary.ligth : Palette.secondary.dark};
  border-radius: 30px;
  padding: 20px;
  margin-top: 10px;
`;

export const UIMessageTextStyled = styled.Text<UIMessageStyledProps>`
  color: ${props => (props.isBot ? Palette.normal.ligth : 'white')};
  font-size: 16px;
`;
