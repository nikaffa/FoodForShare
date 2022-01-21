import React, { Component } from "react";
import { Marginer } from "./Marginer";
import { LogoTitle } from "./BrandLogo";
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
} from "./Common";
import { Link } from "react-router-dom";
import DropDown from "./FreshnessDropDown";
import QuantityDropDown from "./QuantityDropDown";

class Form extends Component {
constructor() {
   super();
   this.state = {
   };
   this.onInputchange = this.onInputchange.bind(this);
   this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitForm() {
    console.log(this.state)
 }
}
export default Form;

export function DonationForm(props) {
  const { items } = this.state;
  return (
    <BoxContainer>
      <LogoTitle>Create a new Donation</LogoTitle>
      <Marginer direction="vertical" margin="3em" />
      <FormContainer>
        <Input 
          name="title"
          type="text"
          placeholder="Title" 
          value={this.state.title}
          onChange={this.onInputchange}
        />
        <Marginer direction="vertical" margin="1em" />
        <Input name="foodtype"
          type="text"
          placeholder="Food Type" 
          value={this.state.foodtype}
          onChange={this.onInputchange} 
        />
        <Marginer direction="vertical" margin="1em" />
          <DropDown name="freshness"
            type="text"
            value={this.state.freshness}
            onChange={this.onInputchange}
          />
        <Marginer direction="vertical" margin="1em" />
        <Input type="description" name="description"
          type="text"
          placeholder="Description" 
          value={this.state.discription}
          onChange={this.onInputchange} 
        />
        <Marginer direction="vertical" margin="1em" />
        <QuantityDropDown>
          <Input name="quantity"
            type="number"
            value={this.state.quantity}
            onChange={this.onInputchange}
          />
        </QuantityDropDown>
        <Marginer direction="vertical" margin="1em" />
        <Input name="address"
          type="text" 
          placeholder="Address" 
          value={this.state.address}
          onChange={this.onInputchange}
        />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <Link to="/donations">
        <SubmitButton size={'25px'} onSubmit={this.onSubmitForm}>Save Donation</SubmitButton>
      </Link>
      <Marginer direction="vertical" margin={5} />
    </BoxContainer>
  );
}