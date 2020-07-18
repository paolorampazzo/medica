import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
`;

export const Header = styled.h1`
  font-family: 'Roboto' sans-serif;
  font-size: 52px;
  color: #225588;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  margin-top: 20px;
`;
