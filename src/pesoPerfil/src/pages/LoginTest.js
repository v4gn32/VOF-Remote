import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import Login from './Login';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

test('calls navigateToProfile when login button is pressed', () => {
  const { getByTestId } = render(<Login />);

  const emailInput = getByTestId('email-input');
  const passwordInput = getByTestId('password-input');
  const loginButton = getByTestId('login-button');

  // Simula a entrada do usuário
  fireEvent.changeText(emailInput, 'usuario@teste.com');
  fireEvent.changeText(passwordInput, 'senha123');

  // Simula o clique no botão de login
  fireEvent.press(loginButton);


  expect(navigation.navigate).toHaveBeenCalledWith('Perfil');
});

test('calls navigateToRegister when register button is pressed', () => {
  const { getByTestId } = render(<Login />);

  const registerButton = getByTestId('register-button');


  fireEvent.press(registerButton);


  expect(navigation.navigate).toHaveBeenCalledWith('Cadastro');
});