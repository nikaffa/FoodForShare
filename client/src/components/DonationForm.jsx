import React, { useContext } from "react";
import { Marginer } from "./Marginer";
import { LogoTitle } from "./BrandLogo";
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
} from "./Common";

export function DonationForm(props) {


  return (
    <BoxContainer>
      <LogoTitle>Create a new Donation</LogoTitle>
      <Marginer direction="vertical" margin="3em" />
      <FormContainer>
        <Input placeholder="Title" />
        <Marginer direction="vertical" margin="1em" />
        <Input placeholder="FoodType" />
        <Marginer direction="vertical" margin="1em" />
        <Input placeholder="Freshness" />
        <Marginer direction="vertical" margin="1em" />
        <Input type="description" placeholder="Description" />
        <Marginer direction="vertical" margin="1em" />
        <Input placeholder="Quantity"/>
        <Marginer direction="vertical" margin="1em" />
        <Input placeholder="Address" />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton>Save Donation</SubmitButton>
      <Marginer direction="vertical" margin={5} />
    </BoxContainer>
  );
}