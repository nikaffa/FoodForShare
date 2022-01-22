import React, { useState, useEffect } from "react";
import { Marginer } from "./Marginer";
import { LogoTitle } from "./BrandLogo";
import { BoxContainer, FormContainer, Input, SubmitButton } from "./Common";
import { Link } from "react-router-dom";
import DropDown from "./FreshnessDropDown";
import QuantityDropDown from "./QuantityDropDown";
import axios from "axios";

export function DonationFormEdit() {

  const [title, setTitle]  = useState("");
  const [foodType, setFoodType] = useState("");
  const [description, setDescription] = useState("");
  const [freshness, setFreshness] = useState("");
  const [quantity, setQuantity] = useState("");
  const [address, setAddress] = useState("");

  const [update, setUpdate] = useState(null);

    useEffect(() => {
      const data = { title: title,
        foodType: foodType,
        freshness: freshness, 
        description: description, 
        quantity: quantity, 
        address: address };

      axios.put('https://localhost:3000/donation/:id/edit', data)
          .then(response => setUpdate(response.data.update));
    }, [title, foodType, freshness, description, quantity, address]);
  
  return (
    <BoxContainer>
      <LogoTitle>Edit Current Donation</LogoTitle>
      <Marginer direction="vertical" margin="3em" />
      <FormContainer>
        <Input 
          name="title"
          placeholder="Title" 
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Marginer direction="vertical" margin="1em" />
        <Input name="foodtype"
          placeholder="Food Type" 
          value={foodType}
          onChange={(event) => setFoodType(event.target.value)} 
        />
        <Marginer direction="vertical" margin="1em" />
          <DropDown name="freshness"
            value={freshness}
            onChange={(event) => setFreshness(event.target.value)}
          />
        <Marginer direction="vertical" margin="1em" />
        <Input type="description" name="description"
          placeholder="Description" 
          value={description}
          onChange={(event) => setDescription(event.target.value)} 
        />
        <Marginer direction="vertical" margin="1em" />
        <QuantityDropDown>
          <Input name="quantity"
            type="number"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
        </QuantityDropDown>
        <Marginer direction="vertical" margin="1em" />
        <Input name="address"
          type="text" 
          placeholder="Address" 
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <Link to="/donations">
        <SubmitButton size={'25px'} onSubmit={update}>Save Donation</SubmitButton>
      </Link>
      <Marginer direction="vertical" margin={5} />
    </BoxContainer>
  );
}

