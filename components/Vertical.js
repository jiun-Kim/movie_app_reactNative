import { useNavigation } from "@react-navigation/core";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { trimText } from "../utils";
import Poster from "./Poster";
import Votes from "./Votes";

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0px 5px 0px;
`;

const Text = styled.Text`
  color: tomato;
  font-size: 12px;
`;

export default ({ isTv = false, id, poster, title, votes }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      id,
      title,
      votes,
      poster,
      isTv,
    });
  };
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <Title>{trimText(title, 15)}</Title>
        {votes > 0 ? <Votes votes={votes} /> : <Text>Not Voted</Text>}
      </Container>
    </TouchableOpacity>
  );
};
