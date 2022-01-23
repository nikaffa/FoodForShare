import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { InnerPageContainer, PageContainer } from "../components/PageContainer";
import { Link, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Marginer } from "../components/Marginer";
import { SubmitButton } from "../components/Common";
import { ContentCard } from "../components/ContentCard";
import { DonationsShow } from "../components/DonationsShow";
// import axios from "axios";

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
      <Marginer direction="vertical" margin="2em"/>
      
      <Marginer direction="vertical" margin="2em"/>
      <StyledInnerContainer>
          <DonationsShow initialActive={action}>

          </DonationsShow>
       
      </StyledInnerContainer>
    </PageContainer>
  );
}