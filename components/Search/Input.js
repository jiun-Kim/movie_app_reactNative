import React from "react";
import styled from "styled-components/native";

const TextInput = styled.TextInput`
  background-color: white;
  padding: 10px 20px;
  border-radius: 15px;
  margin: 0px 30px;
  margin-bottom: 50px;
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => (
  <TextInput
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
    value={value}
    placeholder={placeholder}
    returnKeyType="search"
  />
);

export default Input;
