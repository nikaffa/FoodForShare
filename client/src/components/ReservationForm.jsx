import React, { useContext } from "react";
import { Marginer } from "./Marginer";
import { LogoTitle } from "./BrandLogo";
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
} from "./Common";
import { Link } from "react-router-dom";

export default function ReservationForm(props) {


  return (
    <BoxContainer>
      <LogoTitle>Create a new Reservation</LogoTitle>
      <Marginer direction="vertical" margin="3em" />
      <FormContainer>
        <Input placeholder="Your Name" />
        <Marginer direction="vertical" margin="1em" />
        <Input placeholder="Quantity"/>
        <Marginer direction="vertical" margin="1em" />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <Link to="/reservation/new">
        <SubmitButton size={'25px'}>Save Reservation</SubmitButton>
      </Link>
      <Marginer direction="vertical" margin={5} />
    </BoxContainer>
  );
}