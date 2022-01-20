import React from "react";
import styled from "styled-components";
import ResevationForm from "../components/ReservationForm"
import Navbar from "../components/Navbar";
import { BackgroundContainer, InnerPageContainer, PageContainer } from "../components/PageContainer";
import { Link, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Marginer } from "../components/Marginer";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

export default function Reservation(props) {
  const { action } = useParams();

  return (
    <PageContainer>
      <Navbar/>
      <Marginer direction="vertical" margin="1em"/>
      <Link to="/reservations">
        <Button size="0.25px">Go Back</Button>
      </Link>
      <StyledInnerContainer>
        <BackgroundContainer>
        <ResevationForm initialActive={action} />
        </BackgroundContainer>
      </StyledInnerContainer>
    </PageContainer>
  );
}