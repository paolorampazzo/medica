import React from 'react';

import { FiMail, FiLock } from 'react-icons/fi';

import { Input, FreeContent } from './styles';

interface Props {
  email: string;
  changeForm: () => void;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

const SignInForm: React.FC<Props> = ({
  email,
  password,
  setEmail,
  setPassword,
  handleSubmit,
  changeForm,
}) => (
  <>
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Entrar</button>
    </form>

    <FreeContent
      onClick={() => {
        changeForm();
      }}
    >
      <p>
        {`Se você ainda não está escrito em nenhum curso ou programa, e tenha
            acesso ao conteúdo livre!`}
      </p>
    </FreeContent>
  </>
);

export default SignInForm;
