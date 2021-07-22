import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import Votes from "./Votes";
import Poster from "./Poster";
import { TouchableOpacity } from "react-native";
import { trimText } from "../utils";

const Container = styled.View`
  align-items: center;
  margin-right: 15px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 6px 0px 3px 0px;
`;
// margin up left down right(?)
const Vertical = ({ id, key, poster, title, votes }) => (
  <TouchableOpacity>
    <Container>
      <Poster url={poster} />
      <Title>{trimText(title, 14)}</Title>
      <Votes votes={votes} />
    </Container>
  </TouchableOpacity>
);

Vertical.propTypes = {
  id: propTypes.number.isRequired,
  key: propTypes.number.isRequired,
  poster: propTypes.string,
  title: propTypes.string.isRequired,
  votes: propTypes.number.isRequired,
};

export default Vertical;
