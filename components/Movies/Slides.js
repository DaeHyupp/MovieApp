import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { Dimensions, TouchableOpacity } from "react-native";
import { apiImage, movieApi } from "../../api";
import Poster from "../Poster";
import Votes from "../Votes";
import { trimText } from "../../utils";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const ContainSlide = styled.View`
  width: 100%;
  height: 100%;
`;

const BG = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`;
const VotesContainer = styled.Text`
  margin-bottom: 7px;
`;
const Overview = styled.Text`
  color: rgb(220, 220, 220);
  opacity: 0.9;
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled.View`
  margin-top: 10px;
  background-color: lightgreen;
  padding: 8px;
  border-radius: 3px;
`;
const ButtonText = styled.Text`
  color: white;
`;

const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => (
  <ContainSlide>
    <BG resuzeMode="cover" source={{ uri: apiImage(backgroundImage) }} />
    <Content>
      <Poster url={poster} />
      <Data>
        <Title>{trimText(title, 30)}</Title>
        <VotesContainer>
          <Votes votes={votes} />
        </VotesContainer>
        <Overview>{trimText(overview, 110)}</Overview>
        <TouchableOpacity>
          <Button>
            <ButtonText>View Details</ButtonText>
          </Button>
        </TouchableOpacity>
      </Data>
    </Content>
  </ContainSlide>
);

Slide.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  backgroundImage: propTypes.string.isRequired,
  votes: propTypes.number.isRequired,
  overview: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
};

export default Slide;
