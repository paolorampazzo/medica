import React, { useState } from 'react';

import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Header, Content, Input } from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const data = {
      email,
      password,
    };

    console.log(data);
  };

  return (
    <Container>
      <Content>
        <Header>Mallu Santos</Header>
        <form onSubmit={handleSubmit}>
          <h1>Entrar no sistema</h1>

          <Input>
            <FiMail size={20} />
            <input
              name="email"
              placeholder="E-mail"
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
      </Content>
    </Container>
  );
};

export default SignIn;
