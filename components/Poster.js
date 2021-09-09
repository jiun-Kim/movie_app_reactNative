import React from "react";
import styled from "styled-components/native";
import { apiImage } from "../api";

const Image = styled.Image`
  width: 100px;
  height: 150px;
`;

export default ({ url }) => <Image source={{ uri: apiImage(url) }} />;
