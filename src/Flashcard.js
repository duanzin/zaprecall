import React from "react";
import styled from "styled-components";

export default function Flashcard() {
  return (
    <Li>
      <p>Pergunta 1</p>
    </Li>
  );
}

const Li = styled.li`
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
