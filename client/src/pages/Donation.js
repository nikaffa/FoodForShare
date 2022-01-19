import React from "react";
import styled from "styled-components";
import { DonationForm } from "../components/DonationForm";
import Navbar from "../components/Navbar";
import { BackgroundContainer, InnerPageContainer, PageContainer } from "../components/PageContainer";
import { useParams } from "react-router-dom";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

export default function Donation(props) {
  const { action } = useParams();

  return (
    <PageContainer>
      <Navbar/>
      <StyledInnerContainer>
        <BackgroundContainer>
        <DonationForm initialActive={action} />
        </BackgroundContainer>
      </StyledInnerContainer>
    </PageContainer>
  );
}