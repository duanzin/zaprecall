import React from "react";
import Flashcard from "./Flashcard";
import styled from "styled-components";

export default function Deck(props) {
  return (
    <Main>
      {props.cards.map((card) => (
        <Flashcard
          key={card.id}
          pergunta={card.question}
          resposta={card.answer}
          cardid={card.id}
          cardrespondido={props.cardrespondido}
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
