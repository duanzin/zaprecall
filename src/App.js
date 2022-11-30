import React from "react";
import GlobalStyle from "./globalStyle";
import styled from "styled-components";
import logo from "./assets/img/logo.png";
import Deck from "./Deck";
import Contador from "./Contador";

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Header>
          <img src={logo} /> <h1>ZapRecall</h1>
        </Header>
        <Deck />
        <Contador />
      </Main>
    </>
  );
}

const Main = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
  }
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`;

export default App;
