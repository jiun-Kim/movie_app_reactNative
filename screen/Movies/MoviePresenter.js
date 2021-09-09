import React from "react";
import styled from "styled-components/native";
import Horizontal from "../../components/Horizontal";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";
import Slide from "../../components/Movies/Slide";
import ScrollContainer from "../../components/ScrollContainer";
import SliderContainer from "../../components/SliderContainer";
import Vertical from "../../components/Vertical";

const Container = styled.View``;

export default ({ refreshFn, loading, nowPlaying, popular, upcoming }) => {
  return (
    <ScrollContainer refreshFn={refreshFn} loading={loading}>
      {
        <>
          <SliderContainer>
            {nowPlaying.map((movie) => (
              <Slide
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                overview={movie.overview}
                votes={movie.vote_average}
                backgroundImage={movie.backdrop_path}
                poster={movie.poster_path}
              />
            ))}
          </SliderContainer>
          <Container>
            <HorizontalSlider title="Popular Movies">
              {popular.map((movie) => (
                <Vertical
                  id={movie.id}
                  key={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  votes={movie.vote_average}
                />
              ))}
            </HorizontalSlider>
            <List title="Coming soon">
              {upcoming.map((movie) => (
                <Horizontal
                  id={movie.id}
                  key={movie.id}
                  poster={movie.poster_path}
                  title={movie.original_title}
                  overview={movie.overview}
                  releaseDate={movie.release_date}
                />
              ))}
            </List>
          </Container>
        </>
      }
    </ScrollContainer>
  );
};
