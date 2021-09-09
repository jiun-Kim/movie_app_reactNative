import React from "react";
import styled from "styled-components/native";
import Poster from "./Poster";
import { formatDate, trimText } from "../utils";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

const Container = styled.View`
  padding: 0px 30px;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const Data = styled.View`
  align-items: flex-start;
  width: 60%;
  margin-left: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ReleaseDate = styled.Text`
  color: #f39c12;
  margin-bottom: 10px;
  font-size: 12px;
`;

const Overview = styled.Text`
  color: white;
`;

export default ({ isTv = false, id, poster, title, overview, releaseDate }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      isTv,
      id,
      title,
      overview,
      poster,
    });
  };
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 20)}</Title>
          {releaseDate ? (
            <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate>
          ) : null}
          <Overview>{trimText(overview, 120)}</Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  );
};
