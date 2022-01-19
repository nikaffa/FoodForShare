import React, {useEffect} from "react";
import styled from "styled-components";
import { deviceSize } from "../responsive";
//import { scrollToTop } from "utils/pages";

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFF0A2;
`;

export function PageContainer(props) {
  // useEffect(()=> {
  //   scrollToTop();
  // },[]);

  return <PageWrapper>{props.children}</PageWrapper>;
}

export const InnerPageContainer = styled.div `
  flex: 1;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  min-height: 70vh;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFF0A2;
`;

export const BackgroundContainer = styled.div `
  max-width: ${deviceSize.laptop}px;
  max-height: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;
  background: #FFF0A2;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
`