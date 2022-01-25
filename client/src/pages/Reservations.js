import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import {
  BackgroundContainer,
  InnerPageContainer,
  PageContainer,
} from "../components/PageContainer";
import { Marginer } from "../components/Marginer";
import ReservationsList from "../components/Reservations"

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

export default function Reservations() {
  return (
    <PageContainer>
      <Navbar />
      <Marginer direction="vertical" margin="4em" />
      <StyledInnerContainer>
        <ReservationsList />
      </StyledInnerContainer>
        
      {/* <StyledInnerContainer>
        <BackgroundContainer></BackgroundContainer>
      </StyledInnerContainer> */}
    </PageContainer>
  );
}
