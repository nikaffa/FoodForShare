import React from "react";
import { DonationFormEdit } from "../components/DonationFormEdit";
import Navbar from "../components/Navbar";
import { BackgroundContainer, InnerPageContainer, PageContainer } from "../components/PageContainer";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Marginer } from "../components/Marginer";

export default function Donation(props) {
  
  return (
    <PageContainer>
      <Navbar />
      <Marginer direction="vertical" margin="1em" />
      <Link to="/donations">
        <Button size="0.25px">Go Back</Button>
      </Link>
      <InnerPageContainer>
        <BackgroundContainer>
          <DonationFormEdit/>
        </BackgroundContainer>
      </InnerPageContainer>
    </PageContainer>
  );
}