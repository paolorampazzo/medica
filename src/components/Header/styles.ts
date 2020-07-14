import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  height: 100%;
  padding: 0;
  min-width: 100%;
  position: relative;

  @media (max-width: 480px) {
    height: auto;
    display: flex;
    justify-content: center;
    min-width: 0;
  }
`;
export const Content = styled.div`
  margin: 0 auto;
  display: flex;

  flex-direction: row;
  justify-content: space-between;

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 480px) {
      display: none;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    margin: 6px 15px;
    padding: 0 30px;

    @media (max-width: 480px) {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 10px auto;
    }
  }

  img {
    height: 75px;
    width: 200px;
    object-fit: contain;
    /* margin: 0 30px; */
  }
`;

export const Image = styled.div`
  height: 55px;
  width: 200px;
  margin: -35px auto;
`;

export const Titles = styled.div`
  display: flex;
  margin: 0 auto;
  height: 32px;
  flex-direction: row;
  align-items: center;
  border-left: 1px solid #dddddd;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 15px;

  color: #999999;
  margin: 22px 21px;

  &:hover {
    filter: brightness(1.2);
  }
`;
export const Admin = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #666666;
  padding: 2px;
`;
export const Button = styled.button`
  font-size: 14px;
  color: #de3b3b;
  padding: 2px;
  background: none;
  border: 0;
  position: relative;
`;
