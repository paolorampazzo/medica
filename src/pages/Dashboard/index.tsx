import React from 'react';
import { BsPersonCheck } from 'react-icons/bs';
import {
  GiFamilyHouse,
  GiHealthPotion,
  GiPerson,
  GiStrong,
} from 'react-icons/gi';
import { MdPregnantWoman } from 'react-icons/md';
import { FaChild, FaPersonBooth, FaBrain } from 'react-icons/fa';
import { Container, Content, Grid, Row, Product, Head, Title } from './styles';

import Bar from '../../components/Header';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Bar />
      <Content>
        <Grid>
          <Row>
            <Product color="#4A91D0" disabled>
              <Head>PROGRAMA</Head>
              <Title>SLENDER 4U</Title>
              <BsPersonCheck color="#fff" size={35} />
            </Product>
            <Product color="#008000" disabled>
              <Head>PROGRAMA</Head>
              <Title>Família SLENDER</Title>
              <GiFamilyHouse color="#fff" size={35} />
            </Product>
            <Product color="#FAC300">
              <Head>PROGRAMA</Head>
              <Title>Gestação Inteligente</Title>
              <MdPregnantWoman color="#fff" size={35} />
            </Product>
          </Row>
          <Row>
            <Product color="#9900FF">
              <Head>PROGRAMA</Head>
              <Title>Gerenciamento da Saúde Pessoal</Title>
              <GiHealthPotion color="#fff" size={35} />
            </Product>
            <Product color="#FF3300">
              <Head>PROGRAMA</Head>
              <Title>Saúde Senior</Title>
              <GiPerson color="#fff" size={35} />
            </Product>
            <Product color="#E51C1C">
              <Head>PROGRAMA</Head>
              <Title>Criança Sabetudo</Title>
              <FaChild color="#fff" size={35} />
            </Product>
          </Row>
          <Row>
            <Product color="#FF0066">
              <Head>PROGRAMA</Head>
              <Title>Beleza Certa</Title>
              <FaPersonBooth color="#fff" size={35} />
            </Product>
            <Product color="#5757E8">
              <Head>PROGRAMA</Head>
              <Title>Calma Mente</Title>
              <FaBrain color="#fff" size={35} />
            </Product>
            <Product color="#3FC83F">
              <Head>PROGRAMA</Head>
              <Title>Peso SLENDER</Title>
              <GiStrong color="#fff" size={35} />
            </Product>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

export default Dashboard;
