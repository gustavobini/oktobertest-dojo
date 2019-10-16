import React from 'react';
import { render, fireEvent, wait, cleanup } from '@testing-library/react';

import InputSenha from '../InputSenha';

afterEach(cleanup);

test('Devemos renderizar o input de senha', () => {
  const { getByLabelText } = render(<InputSenha />);

  expect(getByLabelText('Password')).toBeInTheDocument();
});

test('Devemos validar regra da senha', async () => {
  const { getByLabelText, getByText } = render(<InputSenha />);

  fireEvent.change(getByLabelText('Password'), {
    target: { value: 'Aaa23456' }
  });

  await wait(() => {
    expect(getByText('Sucesso!')).toBeInTheDocument();
  });
});

test('Devemos validar regra de senha invalida', async () => {
  const { getByLabelText, getByText } = render(<InputSenha />);

  fireEvent.change(getByLabelText('Password'), {
    target: { value: '123' }
  });

  await wait(() => {
    expect(getByText('Erro!')).toBeInTheDocument();
  });

  fireEvent.change(getByLabelText('Password'), {
    target: { value: '123456' }
  });

  await wait(() => {
    expect(getByText('Erro!')).toBeInTheDocument();
  });
});

test('Devemos validar regra de senha tem letra maiuscula', async () => {
  const { getByLabelText, getByText } = render(<InputSenha />);

  fireEvent.change(getByLabelText('Password'), {
    target: { value: 'abcdef' }
  });

  await wait(() => {
    expect(getByText('Erro!')).toBeInTheDocument();
  });
});

test('Devemos validar regra de senha tem numero', async () => {
  const { getByLabelText, getByText } = render(<InputSenha />);

  fireEvent.change(getByLabelText('Password'), {
    target: { value: 'abcFef' }
  });

  await wait(() => {
    expect(getByText('Erro!')).toBeInTheDocument();
  });
});
