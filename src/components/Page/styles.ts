import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > h1 {
    font-size: 50px;
  }

  > span {
    margin: 12px 0;
  }

  > h2{
    margin-top: 28px;
  }
`;

export const AreaInput = styled.div`
  width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > input {
    width: 100%;
    height: 46px;

    margin-bottom: 12px;
    padding: 0 12px;

    background-color: #121212;

    border: 0;
    border-radius: 6px;

    color: #fff;

    text-align: center;
    font-size: 18px;
  }

  > button{
    width: 100%;
    height: 46px;

    border: 0;
    border-radius: 6px;

    background-color: #357aff;

    color: #FFF;

    font-size: 18px;
  }
`;