import React from 'react';
import InputEmail from '../components/InputEmail';
import InputSenha from '../components/InputSenha';

export default function Login() {
  return (
    <div>
      <h1>Sign In</h1>
      <InputEmail />
      <InputSenha />
      <button data-testid="signin">Sign In</button>
    </div>
  );
}
