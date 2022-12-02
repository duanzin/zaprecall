import React from "react";
import styled from "styled-components";
import seta from "./assets/img/seta_play.png";
import vira from "./assets/img/seta_virar.png";

export default function Flashcard(props) {
  const [cardstate, setcardstate] = React.useState("fechado");
  switch (cardstate) {
    case "pergunta":
      console.log(cardstate);
      return (
        <LiAberto>
          {props.pergunta}
          <img
            src={vira}
            alt="seta vira"
            onClick={() => setcardstate("resposta")}
          />
        </LiAberto>
      );

    case "resposta":
      console.log(cardstate);
      return (
        <LiAberto>
          {props.resposta}
          <Botoes>
            <button>Não lembrei</button>
            <button>Quase não lembrei</button>
            <button>Zap!</button>
          </Botoes>
        </LiAberto>
      );

    default:
      console.log(cardstate);
      return (
        <LiFechado>
          <p>Pergunta {props.cardid}</p>
          <img
            src={seta}
            alt="seta play"
            onClick={() => setcardstate("pergunta")}
          />
        </LiFechado>
      );
  }
}

const LiFechado = styled.li`
  width: 300px;
  height: 65px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;

const LiAberto = styled.li`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;
const Botoes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  button {
    width: 85px;
    height: 37px;
    font-family: "Recursive";
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    border-radius: 5px;
    border: 0;
    padding: 6px;
  }
  button:first-child{
    background: #FF3030;
  }
  button:nth-child(2){
    background: #FF922E;
  }
  button:last-child{
    background: #2FBE34;
  }
`;
