import React from 'react';
import { render, fireEvent, wait, cleanup } from '@testing-library/react';

import InputEmail from '../InputEmail';

afterEach(cleanup);

test('Devemos validar se o e-mail está inválido', async () => {
  const { getByLabelText, getByText } = render(<InputEmail />);

  fireEvent.change(getByLabelText('Email'), {
    target: { value: 'asd' }
  });

  await wait(() => {
    expect(getByText('Erro!')).toBeInTheDocument();
  });
});

test('Devemos validar se o e-mail está vazio', async () => {
  const { getByLabelText, getByText } = render(<InputEmail />);

  fireEvent.change(getByLabelText('Email'), {
    target: { value: '' }
  });

  await wait(() => {
    expect(getByText('Erro!')).toBeInTheDocument();
  });
});

test('Devemos validar se o e-mail está válido', async () => {
  const { getByLabelText, getByText } = render(<InputEmail />);

  fireEvent.change(getByLabelText('Email'), {
    target: { value: 'xurupita@oi.com' }
  });

  await wait(() => {
    expect(getByText('Sucesso!')).toBeInTheDocument();
  });
});
