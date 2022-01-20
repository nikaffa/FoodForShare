import React from "react";
import styled from "styled-components";
import { DonationForm } from "../components/DonationForm";
import Navbar from "../components/Navbar";
import { BackgroundContainer, InnerPageContainer, PageContainer } from "../components/PageContainer";
import { Link, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Marginer } from "../components/Marginer";


export default function Donation(props) {
  const { action } = useParams();

  return (
    <PageContainer>
      <Navbar/>
      <Marginer direction="vertical" margin="1em"/>
      <Link to="/donations">
        <Button size="0.25px">Go Back</Button>
      </Link>
      <InnerPageContainer>
        <BackgroundContainer>
        <DonationForm initialActive={action} />
        </BackgroundContainer>
      </InnerPageContainer>
    </PageContainer>
  );
}