import styled from 'styled-components';
import { lighten } from 'polished';

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

export const FreeContent = styled.button`
  width: 100%;
  height: 100%;
  color: #2f5496;

  background: none;
  border: none;
  outline: none;

  text-align: center;

  p {
    font-size: 22px;
  }

  span {
    color: ${lighten(0.2, '#2f5496')};
  }
`;
