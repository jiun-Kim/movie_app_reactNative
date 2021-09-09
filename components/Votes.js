import React from "react";
import styled from "styled-components/native";

const Content = styled.Text`
  font-size: 12px;
  color: rgb(220, 220, 220);
`;

const Votes = ({ votes }) => <Content>⭐️{votes} / 10</Content>;

export default Votes;
