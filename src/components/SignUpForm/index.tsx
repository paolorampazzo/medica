import React from 'react';

import { FiMail, FiLock, FiType, FiTablet } from 'react-icons/fi';

import { Input, FreeContent } from './styles';

interface Props {
  email: string;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  number: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  changeForm: () => void;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const SignUpForm: React.FC<Props> = ({
  email,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  number,
  setNumber,
  name,
  setName,
  setEmail,
  changeForm,

  handleSubmit,
}) => (
  <>
    <form onSubmit={handleSubmit}>
      <Input>
        <FiType size={20} />
        <input
          name="nome"
          placeholder="Nome Completo"
          type="text"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />
      </Input>
      <Input>
        <FiTablet size={20} />
        <input
          name="number"
          placeholder="WhatsApp"
          type="text"
          value={number}
          onChange={(e: any) => setNumber(e.target.value)}
        />
      </Input>
      <Input>
        <FiMail size={20} />
        <input
          name="email"
          placeholder="E-mail"
          type="text"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
      </Input>
      <Input>
        <FiLock size={20} />
        <input
          name="password"
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
      </Input>
      <Input>
        <FiLock size={20} />
        <input
          name="confirmpassword"
          placeholder="Comfirme sua Senha"
          type="password"
          value={confirmPassword}
          onChange={(e: any) => setConfirmPassword(e.target.value)}
        />
      </Input>
      <button type="submit">Entrar</button>
    </form>

    <FreeContent
      onClick={() => {
        changeForm();
      }}
    >
      <p>Se você já possui login clique aqui!</p>
    </FreeContent>
  </>
);

export default SignUpForm;
