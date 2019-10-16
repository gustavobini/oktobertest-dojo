import React from 'react';
import { render } from '@testing-library/react';

import Login from '../login';

test('Devemos renderizar o titulo do Login', () => {
  const { container } = render(<Login />);
  expect(container.querySelector('h1').textContent).toEqual('Sign In');
});

test('Devemos renderizar os inputs de email e senha', () => {
  const { getByText, getByLabelText } = render(<Login />);
  expect(getByLabelText('Email')).toBeInTheDocument();
  expect(getByLabelText('Password')).toBeInTheDocument();
});

test('Devemos verificar se o botao existe', () => {
  const { getByTestId } = render(<Login />);
  expect(getByTestId('signin')).toBeInTheDocument();
});
