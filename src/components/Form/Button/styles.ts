import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background: ${({theme}) => theme.colors.blue_shape};

  padding: ${RFValue(14, 896)}px;
  border-radius: 5px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.shape};
`;