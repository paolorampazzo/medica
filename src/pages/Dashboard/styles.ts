import styled from 'styled-components';
import { shade } from 'polished';

interface Props {
  disabled?: any;
  color?: any;
  type?: any;
}

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;

  @media (max-width: 480px) {
    width: auto;
  }
`;

export const Header = styled.h1`
  font-family: 'Roboto' sans-serif;
  font-size: 52px;
  color: #225588;
  margin-top: 20px;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  background: #445566;
  border-radius: 10px;
  border: 2px solid #445566;
  color: #fff;

  padding: 16px;
  width: 100%;

  & + div {
    margin-top: 18px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-top: 35px;
  display: flex;

  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    max-width: 100%;
    width: auto;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #225588;
    }

    input {
      background: transparent;
      /* border-radius: 10px; */
      border: 2px solid #445566;
      color: #fff;

      margin-left: 10px;
      /* padding: 16px; */
      width: 100%;

      & + input {
        margin-top: 8px;
      }

      ::placeholder {
        color: #fff;
      }
    }

    button {
      background: #225588;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #fff;
      width: 100%;

      font-weight: bold;

      margin-top: 16px;
      transition: background-color 0.2;

      &:hover {
        background: ${shade(0.2, '#225588')};
      }
    }
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 80%;
  width: 100%;
  margin: 25px auto 0;

  @media (max-width: 480px) {
    height: auto;
    position: relative;
    width: auto;
    margin: 0 auto;
  }
`;

export const Row = styled.div`
  height: 200px;
  width: 100%;

  display: flex;

  flex-direction: row;

  justify-content: center;

  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;

    height: auto;
    width: auto;
  }
`;

export const Product = styled.div<Props>`
  width: 20%;
  height: 80%;
  border-radius: 15px;
  opacity: ${(props) => (props.disabled ? '0.12' : '0.8')};
  margin: 30px;
  box-shadow: 10px 2px 8px rgba(0, 0, 0, 0.3);

  background: ${(props) => props.color};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  @media (max-width: 480px) {
    width: 250px;
    height: 200px;
    margin: 20px 0;
    opacity: ${(props) => (props.disabled ? '0.10' : '0.7')};
  }
`;

export const Head = styled.h1`
  color: #fff;
  font-size: 24px;
  font-family: 'Roboto Mono', monospace;
  margin-top: 10px;
`;

export const Title = styled.h2`
  color: #fff;
  margin-top: 10px;
  height: 40px;

  margin-bottom: 20px;

  text-align: center;
`;
