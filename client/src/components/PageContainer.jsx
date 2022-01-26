import React, {useEffect} from "react";
import styled from "styled-components";
import { deviceSize } from "../responsive";
//import { scrollToTop } from "utils/pages";

const PageWrapper = styled.div`
  width: 100%;
  //height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #dbf5ee;
`;

export function PageContainer(props) {
  useEffect(()=> {
     window.scrollTo(0,0);
   },[]);

  return <PageWrapper>{props.children}</PageWrapper>;
}

export const InnerPageContainer = styled.div `
  flex: 1;
  width: 100%;
  overflow: hidden;
  min-height: 83vh;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #dbf5ee;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
`;

export const BackgroundContainer = styled.div `
  display: flex;
  // flex-direction: column;
  // align-items: flex-start;
  padding: 1em;
  background: ${({ color }) => (color ? color + "" : "#dbf5ee")};
  box-shadow: ${({box})=> (box ? box + "" : "0px 4px 4px rgba(0, 0, 0, 0.25)")}; 
  border: ${({border}) => (border ? border + "" : "none")};
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
`