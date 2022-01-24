import React, { useState } from "react";
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
import axios from "axios";

export function DonationForm() {

  const [title, setTitle]  = useState("");
  const [foodType, setFoodType] = useState("");
  const [description, setDescription] = useState("");
  const [freshness, setFreshness] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");

  const onSubmitForm = function(event) {

    event.preventDefault();

    console.log({ title: title,
      foodType: foodType,
      freshness: Number(freshness.split(' ')[0]), 
      description: description, 
      quantity: quantity, 
      image: image  
    
    });

  
    axios.post(`http://localhost:8080/donations/new`,
    { title: title,
      foodType: foodType,
      freshness: Number(freshness.split(' ')[0]),
      description: description, 
      quantity: quantity, 
      image: image  
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=> {
      console.log('ERROR', err)
    });

  }
  

  return (
    <BoxContainer>
      <LogoTitle>Create a new Donation</LogoTitle>
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
            freshness={freshness}
            setFreshness={setFreshness}
          />
        <Marginer direction="vertical" margin="1em" />
        <Input type="description" name="description"
          placeholder="Description" 
          value={description}
          onChange={(event) => setDescription(event.target.value)} 
        />
        <Marginer direction="vertical" margin="1em" />
        <QuantityDropDown name="quantity"
            quantity={quantity}
            setQuantity={setQuantity}/>
        <Marginer direction="vertical" margin="1em" />
        <Input name="address"
          type="file" 
          placeholder="Image" 
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <Link to="/donations">
        <SubmitButton size={'25px'} onClick={onSubmitForm}>Save Donation</SubmitButton>
      </Link>
      <Marginer direction="vertical" margin={5} />
    </BoxContainer>
  );
}

