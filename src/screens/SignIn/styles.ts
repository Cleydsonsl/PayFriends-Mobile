import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background: ${({ theme }) => theme.colors.shape};
  padding: ${RFValue(30)}px;
`;

export const TextArea = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(24, 896)}px;
  font-family: ${({theme})=> theme.fonts.regular};

  margin: ${RFValue(12)}px 0 ${RFValue(31)}px 0;
`;

export const Form = styled.View`
  justify-content: space-between;
  width: 100%;
  margin-top: ${RFValue(80, 896)}px;
`;

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.blue_shape};
  margin: 7px 0;
`;