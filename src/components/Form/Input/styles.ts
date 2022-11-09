import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  width: 100%;
  padding: 14px 16px;

  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  background: ${({theme}) => theme.colors.shape};
  border-radius: 5px;
  border: solid 1px ${({theme}) => theme.colors.border};

  margin-bottom: 16px;
`