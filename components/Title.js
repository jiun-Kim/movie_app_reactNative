import React from "react";
import styled from "styled-components/native";

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-left: 30px;
`;

export default ({ title }) => <Title>{title}</Title>;
