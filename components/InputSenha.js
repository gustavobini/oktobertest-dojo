import React, { useState } from 'react';

export default function InputSenha() {
  const [isValid, setIsValid] = useState(false);

  const onChange = event => {
    const { value } = event.target;
    let valid = true;

    if (value.length < 6) {
      valid = false;
    }

    if (!value.match(new RegExp('[a-z]+'))) {
      valid = false;
    }
    if (!value.match(new RegExp('[A-Z]+'))) {
      valid = false;
    }
    if (!value.match(new RegExp('[0-9]+'))) {
      valid = false;
    }
    // !value.match(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{6,}$/gm))
    // valid = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/gm);

    setIsValid(valid);
  };

  return (
    <>
      <label htmlFor="senha">Password</label>
      <input type="password" id="senha" onChange={onChange} />

      {isValid ? <p>Sucesso!</p> : <p>Erro!</p>}
    </>
  );
}
