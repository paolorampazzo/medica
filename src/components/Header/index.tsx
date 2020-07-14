import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

import logo from '../../logo_v1 (1).webp';

import {
  Container,
  Content,
  Title,
  Admin,
  Button,
  Titles,
  Image,
} from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  async function handleSignOut() {
    await signOut();
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <Image>
              <img src={logo} alt="Slender" />
            </Image>
          </Link>
          <Titles>
            <Link to="/">
              <Title>BIBLIOTECA</Title>
            </Link>
            <Link to="/">
              <Title>SLENDER</Title>
            </Link>
            <Link to="/">
              <Title>EBOOKS</Title>
            </Link>
            <Link to="/">
              <Title>CONTATO</Title>
            </Link>
          </Titles>
        </nav>

        <aside>
          <Admin>Admin Slender</Admin>
          <Button onClick={handleSignOut}>sair do sistema</Button>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
