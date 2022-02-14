import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { InnerPageContainer, PageContainer } from "../components/PageContainer";
import { Link, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Marginer } from "../components/Marginer";
import { DonationsShow } from "../components/DonationsShow";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-left: 4em;
  margin-right: 4em;
  margin-bottom: 4em;
`;

export default function Donations(props) {
  const { action } = useParams();

  return (
    <PageContainer>
      <Navbar/>
      <Marginer direction="vertical" margin="4em"/>
      <StyledInnerContainer>
        <Link to="/donation/new">
          <Button size="25px">Donate food</Button>
        </Link>
        <DonationsShow initialActive={action} /> 
      </StyledInnerContainer>
    </PageContainer>
  );
}