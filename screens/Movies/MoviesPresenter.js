import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import Slide from "../../components/Movies/Slides";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View``;

const UpComingContainer = styled.View``;

// need to place logo APPLE-like ratio
const LoadingHeader = styled.View`
  background-color: black;
  top: 160px;
`;

const SliderContainer = styled.View`
  width: 100%;
  height: 35%;
  background-color: black;
  margin-bottom: 50px;
`;
//controlsEnabled will make buttons, loop and timeout wont be used in next proj
export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollView
    style={{ backgroundColor: "black" }}
    contentContainerStyle={{
      flex: 1,
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? (
      <LoadingHeader>
        <ActivityIndicator color="white" size="small" />
      </LoadingHeader>
    ) : (
      <>
        <SliderContainer>
          <Swiper controlsEnabled={false} loop timeout={3.5}>
            {nowPlaying.map((movie) => (
              <Slide
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                overview={movie.overview}
                backgroundImage={movie.backdrop_path}
                votes={movie.vote_average}
                poster={movie.poster_path}
              />
            ))}
          </Swiper>
        </SliderContainer>
        <Container>
          <Title title={"Popular Movies"} />
          <ScrollView
            style={{ marginTop: 20, marginVertical: 30 }}
            contentContainerStyle={{ paddingLeft: 15 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {popular.map((movie) => (
              <Vertical
                id={movie.id}
                key={movie.id}
                poster={movie.poster_path}
                title={movie.original_title}
                votes={movie.vote_average}
              />
            ))}
          </ScrollView>
          <Title title={"Coming Soon"}></Title>
          <UpComingContainer>
            {upcoming.map((movie) => (
              <Horizontal
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                releaseDate={movie.release_date}
                poster={movie.poster_path}
                overview={movie.overview}
              />
            ))}
          </UpComingContainer>
        </Container>
      </>
    )}
  </ScrollView>
);
