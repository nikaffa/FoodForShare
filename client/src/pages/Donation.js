import React, { useEffect } from "react";
import styled from "styled-components";
import { DonationForm } from "../components/DonationForm";
import Navbar from "../components/Navbar";
import { BackgroundContainer, InnerPageContainer, PageContainer } from "../components/PageContainer";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Marginer } from "../components/Marginer";
import { SubmitButton } from "../components/Common";
import { useState } from "react";
import axios from "axios";

const url = `http://localhost:8080/donations/1`;

const { state, setState } = useState({ donations: [] });
//const { formData, setFormData } =useState({});

const createDonation = (data) => {
  console.log(state);
  axios.post(url, data)
    .then(res => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });

};

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
          <DonationForm/>
        </BackgroundContainer>
      </InnerPageContainer>
    </PageContainer>
  );
}