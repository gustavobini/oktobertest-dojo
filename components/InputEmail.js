import React, { useState } from 'react';

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export default function InputEmail() {
  const [isValid, setIsValid] = useState(false);

  const onChange = event => {
    const { value } = event.target;
    let valid = true;

    if (!emailRegex.test(value)) {
      valid = false;
    }

    // if (!value.match(new RegExp('[a-z]+'))) {
    //   valid = false;
    // }
    // if (!value.match(new RegExp('[A-Z]+'))) {
    //   valid = false;
    // }
    // if (!value.match(new RegExp('[0-9]+'))) {
    //   valid = false;
    // }
    // !value.match(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{6,}$/gm))
    // valid = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/gm);

    setIsValid(valid);
  };

  return (
    <>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" onChange={onChange} />

      {isValid ? <p>Sucesso!</p> : <p>Erro!</p>}
    </>
  );
}
