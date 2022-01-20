import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  border: #707070 solid 0.1em;
  outline: none;
  color: #white;
  padding: 6px 1em;
  font-size: ${({ size }) => (size ? size + "px" : "18px")};
  font-weight: 600;
  border-radius: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: #white;
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