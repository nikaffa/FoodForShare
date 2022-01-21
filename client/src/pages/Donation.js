import React from "react";
import styled from "styled-components";
import { DonationForm } from "../components/DonationForm";
import Navbar from "../components/Navbar";
import { BackgroundContainer, InnerPageContainer, PageContainer } from "../components/PageContainer";
import { Link, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Marginer } from "../components/Marginer";
import { SubmitButton } from "../components/Common";
import { useState } from "react";
import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:8080/donations/1`
  })
  
  // const {state, setState} = useState({donations:[]})
  
  // const createDonation = async() => {
  //   let res = await api.post('/', {name: donation.name, foodType: donation.foodType})
  //   console.log(res)
  // }
  



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
        <DonationForm>
        <Link to="/donations">
          <SubmitButton size={'25px'} onClick={api}>Save Donation</SubmitButton>
        </Link>
      </DonationForm>
        </BackgroundContainer>
      </InnerPageContainer>
    </PageContainer>
  );
}