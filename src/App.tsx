import React from 'react';

import './styles.css';
import { FaBookReader } from 'react-icons/fa';
import { RiUserSearchLine } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';
import {
  Container,
  Header,
  Title,
  Area,
  TopicLeft,
  TopicCenter,
  TopicRight,
  QuadradoEsquerdo,
  QuadradoMeio,
  QuadradoDireito,
  RightIconArea,
  LeftIconArea,
  CenterIconArea,
} from './styles';

const App: React.FC = () => (
  <>
    <Container>
      <Header>
        <Title>Mallu Santos</Title>
      </Header>
      <Area>
        <QuadradoEsquerdo>
          <LeftIconArea>
            <BsPerson size={50} />
          </LeftIconArea>
          <TopicLeft>Pacientes</TopicLeft>
        </QuadradoEsquerdo>
        <QuadradoMeio>
          <CenterIconArea>
            <RiUserSearchLine size={50} />
          </CenterIconArea>
          <TopicCenter>Monitores</TopicCenter>
        </QuadradoMeio>
        <QuadradoDireito>
          <RightIconArea>
            <FaBookReader size={50} />
          </RightIconArea>
          <TopicRight>Alunos</TopicRight>
        </QuadradoDireito>
      </Area>
    </Container>
  </>
);

export default App;
