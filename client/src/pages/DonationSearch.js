import React, { useState, useCallback, useRef } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { BackgroundContainer, InnerPageContainer, PageContainer } from "../components/PageContainer";
import { Link, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Marginer } from "../components/Marginer";
import { Map } from "../components/Map";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 1em;
`;

export default function DonationSearch(props) {
  const { action } = useParams();
  return (
    <PageContainer>
      <Navbar/>
      <Marginer direction="vertical" margin="2em"/>
      <StyledInnerContainer>
        <BackgroundContainer>
          <Map initialActive={action} />
        </BackgroundContainer>
      </StyledInnerContainer>
    </PageContainer>
  );
}
