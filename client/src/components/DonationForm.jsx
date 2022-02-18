import React, { useState } from "react";
import { Marginer } from "./Marginer";
import { LogoTitle } from "./BrandLogo";
import { BoxContainer, FormContainer, Input, SubmitButton } from "./Common";
import { Link } from "react-router-dom";
import DropDown from "./FreshnessDropDown";
import QuantityDropDown from "./QuantityDropDown";
import axios from "axios";
import useUser from "../hooks/useUser";

export function DonationForm() {
  const [title, setTitle] = useState("");
  const [foodType, setFoodType] = useState("");
  const [description, setDescription] = useState("");
  const [freshness, setFreshness] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [update, setUpdate] = useState(null);
  const { user } = useUser();

  const onSubmitForm = function (event) {
    event.preventDefault();
    
    const form_data = {
      title: title,
      foodType: foodType,
      freshness: Number(freshness.split(" ")[0]),
      description: description,
      quantity: quantity,
      image: image,
    };

    axios
      .post(`http://localhost:8080/donations/new`, { user, form_data })
      .then((response) => {
        if(response.status === 222 || response.status === '222')
        {
          ClearForm();
          setUpdate("Thank you for your donation. Donation sucessfully saved.")
          return(
            <>Thank you for your donation. Donation sucessfully saved.</>
          )
        }
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  const ClearForm = () => {
    setTitle("");
    setFoodType("");
    setDescription("");
    setFreshness(0);
    setQuantity(0);
    setImage("");
  }

  return (
    <BoxContainer>
      <LogoTitle>Create a new Donation</LogoTitle>
      {update}
      <Marginer direction="vertical" margin="3em" />
      <FormContainer>
        <Input
          name="title"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Marginer direction="vertical" margin="1em" />
        <Input
          name="foodtype"
          placeholder="Food Type"
          value={foodType}
          onChange={(event) => setFoodType(event.target.value)}
        />
        <Marginer direction="vertical" margin="1em" />
        <DropDown
          name="freshness"
          freshness={freshness}
          setFreshness={setFreshness}
        />
        <Marginer direction="vertical" margin="1em" />
        <Input
          type="description"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Marginer direction="vertical" margin="1em" />
        <QuantityDropDown
          name="quantity"
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <Marginer direction="vertical" margin="1em" />
        <Input
          name="image"
          type="url"
          placeholder="Image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <Link to="/donations">
        <SubmitButton size={"25px"} onClick={onSubmitForm}>
          Save Donation
        </SubmitButton>
      </Link>
      <Marginer direction="vertical" margin={5} />
    </BoxContainer>
  );
}
