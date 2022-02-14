import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { InnerPageContainer, PageContainer } from "../components/PageContainer";
import { Marginer } from "../components/Marginer";
import ReservationsList from "../components/Reservations"
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

export default function Reservations() {
  return (
    <PageContainer>
      <Navbar />
      <Marginer direction="vertical" margin="1em" />
      <StyledInnerContainer>
        <Link to="/donation/search">
          <Button size="25px">Search food</Button>
        </Link>
        <ReservationsList />
      </StyledInnerContainer>
    </PageContainer>
  );
}
