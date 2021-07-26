import React from 'react';
import { Input } from '../../components/Forms/Input/Index';
import { Button } from '../../components/Forms/Button/Index';

import {
  Container,
  Header,
  Title,
  Form,
  Fields
} from './styles';

export function Register() {
  return(
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}