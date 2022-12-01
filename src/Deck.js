import React from "react";
import Flashcard from "./Flashcard";
import styled from "styled-components";

export default function Deck(props) {
  return (
    <Main>
      {props.cards.map((card) => (
        <Flashcard
          pergunta={card.question}
          resposta={card.answer}
          setcardrespondido={props.setcardrespondido}
        />
      ))}
    </Main>
  );
}

const Main = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 26px;
  align-items: center;
  justify-content: space-between;
  font-family: "Recursive", sans-serif;
`;
