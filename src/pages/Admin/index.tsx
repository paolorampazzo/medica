import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Container, Content, Header } from './styles';
import Bar from '../../components/Header';

const Admin: React.FC = () => {
  // const history = useHistory();
  return (
    <Container>
      <Bar />
      <Content>
        <Header>Admin</Header>
      </Content>
    </Container>
  );
};

export default Admin;
