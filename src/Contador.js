import React from "react";
import styled from "styled-components";

export default function Contador(props) {
  return (
    <Footer>
      {props.cardrespondido}/{props.numcards} CONCLUÍDOS
    </Footer>
  );
}

const Footer = styled.div`
  width: 100%;
  min-height: 70px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;
