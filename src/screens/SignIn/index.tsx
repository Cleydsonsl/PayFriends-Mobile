import React from 'react';
import { Controller, useForm } from 'react-hook-form'

import { Container, Form, TextArea, Error } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

import LogoImg from '../../assets/PayFriends.svg';
import Brand from '../../assets/brand.svg';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

type FormData = {
  email: string;
  password: string;
};

export function SignIn() {
  const { control, handleSubmit, formState: {errors} } = useForm<FormData>();

  const onSubmit = (data: FormData) => console.log(data)

  return(
    <Container>
      <LogoImg height={RFValue(58, 896)} width={RFValue(247, 896)}/>
      <TextArea>
        Bem vindo de volta
      </TextArea>
      <Brand height={RFValue(270, 896)} width={RFValue(388, 896)}/>
      <Form>
        {errors.email && <Error>This is riquired</Error>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: {onChange, onBlur, value}}) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='Email'
            />
          )}
          name='email'
        />

        {errors.password && <Error>This is riquired</Error>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: {onChange, onBlur, value}}) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='Password'
            />
          )}
          name='password'
        />
        <Button title='ENTRAR' onPress={handleSubmit(onSubmit)}/>
      </Form>
    </Container>
  )
}