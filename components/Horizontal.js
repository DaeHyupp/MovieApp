import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import Poster from "./Poster";
import Votes from "./Votes";
import { formatDate, trimText } from "../utils";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  margin-left: 20px;
  margin-top: 30px;
  flex-direction: row;
  align-items: flex-start;
`;
//not sure but flex-direction makes string on row when we put row
const Data = styled.View`
  width: 66%;
  margin-left: 20px;
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
`;
const Overview = styled.Text`
  margin-top: 10px;
  color: white;
`;
const ReleaseDate = styled.Text`
  color: white;
  font-size: 13px;
`;

const Horizontal = ({ id, title, poster, releaseDate, overview }) => (
  <TouchableOpacity>
    <Container>
      <Poster url={poster} />
      <Data>
        <Title>{title}</Title>
        {releaseDate ? (
          <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate>
        ) : null}
        <Overview>{trimText(overview, 130)}</Overview>
      </Data>
    </Container>
  </TouchableOpacity>
);

Horizontal.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  releaseDate: propTypes.string,
  overview: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
};

export default Horizontal;
