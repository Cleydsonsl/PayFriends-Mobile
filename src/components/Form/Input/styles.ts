import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  width: 100%;
  padding: ${RFValue(14, 896)}px ${RFValue(17, 896)}px;

  color: ${({theme})=> theme.colors.text};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20, 896)}px;
  background: ${({theme}) => theme.colors.shape};
  border-radius: 5px;
  border: solid 1px ${({theme}) => theme.colors.border};

  margin-bottom: 16px;
`