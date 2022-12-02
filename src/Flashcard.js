import React from "react";
import styled from "styled-components";
import seta from "./assets/img/seta_play.png";
import vira from "./assets/img/seta_virar.png";
import certo from "./assets/img/icone_certo.png";
import erro from "./assets/img/icone_erro.png";
import quase from "./assets/img/icone_quase.png";

export default function Flashcard(props) {
  const [cardstate, setcardstate] = React.useState("fechado");
  const [imagem, setimagem] = React.useState(seta);
  const [decoration, setdecoration] = React.useState("none");
  const [cor, setcor] = React.useState("#333333");
  const [desativar, setdesativar] = React.useState(false);
  const [teste, setteste] = React.useState("");

  function respondeu() {
    setcardstate("fechado");
    setdecoration("line-through");
    props.setcardrespondido(props.cardrespondido + 1);
    setdesativar(true);
  }

  switch (cardstate) {
    case "pergunta":
      return (
        <LiAberto data-test="flashcard">
          <p data-test="flashcard-text">{props.pergunta}</p>
          <img
            data-test="turn-btn"
            src={vira}
            alt="seta vira"
            onClick={() => setcardstate("resposta")}
          />
        </LiAberto>
      );

    case "resposta":
      return (
        <LiAberto data-test="flashcard">
          <p data-test="flashcard-text">{props.resposta}</p>
          <Botoes>
            <button
              data-test="no-btn"
              onClick={() => {
                setcor("#FF3030");
                setimagem(erro);
                setteste("no-icon");
                respondeu();
              }}
            >
              Não lembrei
            </button>
            <button
              data-test="partial-btn"
              onClick={() => {
                setcor("#FF922E");
                setimagem(quase);
                setteste("partial-icon");
                respondeu();
              }}
            >
              Quase não lembrei
            </button>
            <button
              data-test="zap-btn"
              onClick={() => {
                setcor("#2FBE34");
                setimagem(certo);
                setteste("zap-icon");
                respondeu();
              }}
            >
              Zap!
            </button>
          </Botoes>
        </LiAberto>
      );

    default:
      return (
        <LiFechado cor={cor} decoration={decoration} data-test="flashcard">
          <p data-test="flashcard-text">Pergunta {props.cardid}</p>
          <button
            data-test="play-btn"
            disabled={desativar}
            onClick={() => setcardstate("pergunta")}
          >
            <img data-test={teste} src={imagem} alt="" />
          </button>
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
    color: ${(props) => props.cor};
    text-decoration-line: ${(props) => props.decoration};
  }
  button {
    all: unset;
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
  button:first-child {
    background: #ff3030;
  }
  button:nth-child(2) {
    background: #ff922e;
  }
  button:last-child {
    background: #2fbe34;
  }
`;
