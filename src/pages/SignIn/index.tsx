import React, { useState, useCallback } from 'react';
import { uuid } from 'uuidv4';
import { useHistory } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';
import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';
import { Container, Content, ImageContainer, Title } from './styles';
import { useAuth } from '../../context/AuthContext';
// import logo from '../../logo_v1 (1).webp';
import logo from '../../assets/book.png';

const SignIn: React.FC = () => {
  const history = useHistory();
  const { signIn, user } = useAuth();
  const { addToast, removeToast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [freeForm, setFreeForm] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  if (user) history.push('/');

  const handleSubmitNewUser = useCallback((e: React.FormEvent) => {
    e.preventDefault();
  }, []);

  const changeForm = () => {
    setEmail('');
    setPassword('');
    setFreeForm(!freeForm);
    setConfirmPassword('');
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const id = uuid();

      addToast({
        id,
        type: 'success',
        title: 'Carregando',
        description: '',
      });

      try {
        await signIn({ email, password });
        setPassword('');

        history.push('/');
      } catch (err) {
        const idError = uuid();

        addToast({
          id: idError,
          type: 'Erro!',
          title: 'Login inválido',
          description: 'Houve um erro ao realizar o login',
        });

        setTimeout(() => {
          removeToast(idError);
        }, 2000);
      }

      removeToast(id);
    },

    [signIn, email, password, addToast, removeToast, history],
  );

  return (
    <Container>
      <Content>
        <ImageContainer>
          <img src={logo} alt="Slender" />
        </ImageContainer>
        <Title>
          <h1>Academia SLENDER</h1>
        </Title>

        {freeForm ? (
          <SignUpForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            number={number}
            setNumber={setNumber}
            name={name}
            setName={setName}
            handleSubmit={handleSubmitNewUser}
            changeForm={changeForm}
          />
        ) : (
          <SignInForm
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
            changeForm={changeForm}
          />
        )}
      </Content>
    </Container>
  );
};

export default SignIn;
