// Cadastro.test.js
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import Cadastro from './Cadastro';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

test('calls handleSubmit with correct form data', () => {
  const { getByTestId } = render(<Cadastro />);

  const nomeInput = getByTestId('nome-input');
  const emailInput = getByTestId('email-input');
  const passwordInput = getByTestId('password-input');
  const signUpButton = getByTestId('signup-button');

  // Simula a entrada do usuário
  fireEvent.changeText(nomeInput, 'Novo Usuario');
  fireEvent.changeText(emailInput, 'novo@usuario.com');
  fireEvent.changeText(passwordInput, 'novasenha');

  // Simula o clique no botão de sign up
  fireEvent.press(signUpButton);



  expect(console.log).toHaveBeenCalledWith('Formulário enviado:', {
    nome: 'Novo Usuario',
    email: 'novo@usuario.com',
    password: 'novasenha',
  });
});