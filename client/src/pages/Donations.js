import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { BackgroundContainer, InnerPageContainer, PageContainer } from "../components/PageContainer";
import { Link, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Marginer } from "../components/Marginer";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

export default function Donations(props) {
  const { action } = useParams();

  return (
    <PageContainer>
      <Navbar/>
      <Marginer direction="vertical" margin="2em"/>
      <Link to="/donation/new">
        <Button size="0.25px">Add Donation</Button>
      </Link>
      <StyledInnerContainer>
        <BackgroundContainer>
        </BackgroundContainer>
      </StyledInnerContainer>
    </PageContainer>
  );
}