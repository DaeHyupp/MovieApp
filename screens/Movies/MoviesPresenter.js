import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import Slide from "../../components/Movies/Slides";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

// need to place logo APPLE-like ratio
const LoadingHeader = styled.View`
  background-color: black;
  top: 160px;
`;

const SliderContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
  background-color: black;
  margin-bottom: 50px;
`;
//controlsEnabled will make buttons, loop and timeout wont be used in next proj
export default ({ loading, nowPlaying, popular }) => (
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
        <Title title={"Popular Movies"} />
        <ScrollView
          style={{ marginTop: 20 }}
          contentContainerStyle={{ paddingLeft: 15 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {popular.map((movie) => (
            <Vertical
              key={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
              votes={movie.vote_average}
            />
          ))}
        </ScrollView>
      </>
    )}
  </ScrollView>
);
