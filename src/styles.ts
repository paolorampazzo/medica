import styled from 'styled-components';

export const Container = styled.div`
  background: #b9844d;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  margin: 0;

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
`;

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  font-size: 80px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;

  border-bottom: 1px solid #fff;

  margin: 50px auto 100px;
`;

export const Area = styled.div`
  margin: 20px auto;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

export const TopicLeft = styled.h1`
  position: absolute;
  width: 100%;
  margin: 0 75px;
  align-self: center;
`;

export const TopicCenter = styled.h1`
  position: absolute;
  width: 100%;
  margin-left: 105px;
  align-self: center;
`;

export const TopicRight = styled.h1`
  position: absolute;
  width: 100%;
  margin: 0 30px;
  align-self: center;
  margin-top: 130px;
  margin-left: 180px;
`;

export const QuadradoEsquerdo = styled.div`
  height: 300px;
  width: 300px;
  background: #5e72b9;

  display: flex;
  /* justify-content: center; */

  ::after {
    content: '';
    display: inline-block;
    position: relative;
    width: 120px;
    height: 120px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-color: #b9844d;

    top: 90px;
    left: 210px;
  }
`;

export const QuadradoMeio = styled.div`
  height: 300px;
  width: 300px;
  background: #fff;
  display: flex;

  ::before {
    content: '';
    display: inline-block;
    position: relative;
    width: 120px;
    height: 120px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-color: #fff;

    top: 90px;
    left: -90px;
  }

  ::after {
    content: '';
    display: inline-block;
    position: relative;
    width: 120px;
    height: 120px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-color: #fff;

    top: 90px;
    left: 150px;
  }
`;

export const QuadradoDireito = styled.div`
  height: 300px;
  width: 300px;
  background: #eb828b;

  ::after {
    content: '';
    display: inline-block;
    position: relative;
    width: 120px;
    height: 120px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-color: #b9844d;

    top: 90px;
    left: -30px;
  }
`;

export const RightIconArea = styled.div`
  position: absolute;
  margin: 110px 120px;
`;

export const CenterIconArea = styled.div`
  position: absolute;
  margin: 110px 50px;
`;

export const LeftIconArea = styled.div`
  position: absolute;
  margin: 110px 20px;
`;
