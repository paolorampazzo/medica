import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const Header = styled.h1`
  font-family: 'Roboto' sans-serif;
  font-size: 52px;
  color: #225588;
  margin-top: 50px;
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
  max-width: 700px;

  display: flex;
  flex-direction: column;
  align-items: center;

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
