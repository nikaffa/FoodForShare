import React from "react";
// import styled from "styled-components";
import { DonationForm } from "../components/DonationForm";
import Navbar from "../components/Navbar";
import { BackgroundContainer, InnerPageContainer, PageContainer } from "../components/PageContainer";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Marginer } from "../components/Marginer";
// import { SubmitButton } from "../components/Common";
// import { useState } from "react";
// import axios from "axios";



export default function Donation(props) {
  
  return (
    <PageContainer>
      <Navbar />
      <Marginer direction="vertical" margin="5em" />
      <Link to="/donations">
        <Button size="0.25px">Go Back</Button>
      </Link>
      <InnerPageContainer>
        <BackgroundContainer color="#fff0d2" border="1px black dotted" box-shadow="0px 5px 5px rgba(0, 0, 0, 0.25)" >
          <DonationForm/>
        </BackgroundContainer>
      </InnerPageContainer>
    </PageContainer>
  );
}