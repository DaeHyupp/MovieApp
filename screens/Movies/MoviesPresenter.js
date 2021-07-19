import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator } from "react-native";
import Slide from "../../components/Movies/Slides";



const Container = styled.View`
    flex: 1;
    background-color: black;
`;

// need to place logo APPLE-like ratio
const LoadingHeader = styled.View`
    background-color: black;
    top : 160px;
`;

//controlsEnabled will make buttons, loop and timeout wont be used in next proj
export default ({ loading, nowPlaying }) => (
<Container>
    {loading ? (
        <LoadingHeader>
        <ActivityIndicator color="white" size="small" />
        </LoadingHeader>
    ) : (
        <>
            <Swiper controlsEnabled={false} loop timeout={3.500}>
                {nowPlaying.map(movie=>(
                    <Slide
                        key={movie.id}
                        id={movie.id}
                        title={movie.original_title}
                        overview={movie.overview}
                        backgroundImage={movie.backdrop_path}
                        votes={movie.vote_average}
                    />
                ))}
            </Swiper>
        </>
    )}
</Container>
);