import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  color: #black;
  padding: 6px 1em;
  font-size: ${({ size }) => (size ? size + "px" : "18px")};
  font-weight: 600;
  border-radius: 3px;
  background-color: #a1e8fe;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    background-color: #707070;
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`
;

export function Button(props) {
  const { size } = props;

  return (
    <ButtonWrapper size={size} className={props.className}>
      {props.children}
    </ButtonWrapper>
  );
}