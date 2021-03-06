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

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:active,
  input:-webkit-autofill:focus {
    background-color: #445566 !important;
    color: #fff !important;
    -webkit-box-shadow: 0 0 0 100px #445566 inset !important;
    -webkit-text-fill-color: #fff !important;
  }

  form {
    margin: 20px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #225588;
    }

    div {
      background: #445566;
    }

    input {
      background: #445566;
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
        background: #445566;
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

export const ImageContainer = styled.div`
  @media (max-width: 480px) {
    img {
      width: 200px;
    }
  }
`;
