import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { Dimensions, Image } from "react-native";
import { apiImage, movieApi } from "../../api";

const {width:WIDTH, height:HEIGHT} = Dimensions.get("window");

const Container = styled.View`
    width:${WIDTH}px;
    height:${HEIGHT/4}px;
    background-color:lightgreen;
`;

const BG = styled.Image`
    width: 100%;
    height: 100%
`;

const Slide = ({id, title, backgroundImage, votes, overview}) =>(
   <Container>
        <BG 
        source={{uri : apiImage(backgroundImage)}}
        />
    </Container>
);

Slide.propTypes = {
    id : propTypes.number.isRequired,
    title : propTypes.string.isRequired,
    backgroundImage : propTypes.string.isRequired,
    votes : propTypes.number.isRequired,
    overview : propTypes.string.isRequired
};

export default Slide;