import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { apiImage } from "../api";
import Votes from "./Votes";
import Poster from "./Poster";
import { TouchableOpacity } from "react-native";

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
const Vertical = ({ poster, title, votes }) => (
  <TouchableOpacity>
    <Container>
      <Poster url={apiImage(poster)} />
      <Title>{title.length > 14 ? `${title.slice(0, 14)}...` : title}</Title>
      <Votes votes={votes} />
    </Container>
  </TouchableOpacity>
);

Vertical.propTypes = {
  poster: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  votes: propTypes.number.isRequired,
};

export default Vertical;
