import React, { useState, useCallback } from 'react';
import { uuid } from 'uuidv4';
import { FiMail, FiLock } from 'react-icons/fi';
import { useToast } from '../../context/ToastContext';
import { Container, Header, Content, Input } from './styles';
import { useAuth } from '../../context/AuthContext';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const { addToast, removeToast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      try {
        await signIn({ email, password });

        const id = uuid();

        addToast({
          id,
          type: 'success',
          title: 'Carregando',
          description: '',
        });

        setTimeout(() => {
          removeToast(id);
        }, 2000);
      } catch (err) {
        addToast({
          id: uuid(),
          type: 'Erro!',
          title: 'Login inválido',
          description: 'Houve um erro ao realizar o login',
        });
      }
    },

    [signIn, email, password, addToast, removeToast],
  );

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
