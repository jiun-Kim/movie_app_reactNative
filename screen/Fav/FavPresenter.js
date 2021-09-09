import React, { useState } from "react";
import { Animated, Dimensions, PanResponder } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
`;

const anima = {
  top: 80,
  height: HEIGHT / 1.5,
  width: "90%",
  position: "absolute",
};

const Poster = styled.Image`
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;

export default ({ results }) => {
  const [topCard, setTopCard] = useState(0);
  const newCard = () => setTopCard((currentValue) => currentValue + 1);
  const animation = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx, dy }) => {
      animation.setValue({
        x: dx,
        y: dy,
      });
    },
    onPanResponderRelease: (_, { dx }) => {
      if (dx >= 250) {
        Animated.spring(animation, {
          toValue: {
            x: WIDTH + 100,
            y: 0,
          },
          useNativeDriver: true,
        }).start(newCard);
      } else if (dx <= -250) {
        Animated.spring(animation, {
          toValue: {
            x: -WIDTH - 100,
            y: 0,
          },
          useNativeDriver: true,
        }).start(newCard);
      } else {
        Animated.spring(animation, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    },
  });
  const rotationValue = animation.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: ["-8deg", "0deg", "8deg"],
    extrapolate: "clamp",
  });
  const secondCardOpacity = animation.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0, 1],
    extrapolate: "clamp",
  });
  const secondCardScale = animation.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.8, 1],
    extrapolate: "clamp",
  });
  return (
    <Container>
      {results.map((result, index) => {
        if (index < topCard) {
          return null;
        }
        if (index === topCard) {
          return (
            <Animated.View
              style={{
                ...anima,
                transform: [
                  { rotate: rotationValue },
                  ...animation.getTranslateTransform(),
                ],
                zIndex: 1,
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        } else if (index === topCard + 1) {
          return (
            <Animated.View
              style={{
                ...anima,
                zIndex: -index,
                opacity: secondCardOpacity,
                transform: [{ scale: secondCardScale }],
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              style={{
                ...anima,
                zIndex: -index,
                opacity: 0,
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        }
      })}
    </Container>
  );
};
