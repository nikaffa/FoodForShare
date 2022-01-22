import React, { useContext } from "react";
import { useState, useCallback, useRef, useEffect } from "react";
import { Marginer } from "./Marginer";
import { LogoTitle } from "./BrandLogo";
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
} from "./Common";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ReservationForm(props) {

function onsubmit()
{
  axios.post('/reservations/new');
}

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [mobileNumber, setMobileNumber] = useState("");
const [message, setMessage] = useState("");

let handleSubmit = async (e) => {
  e.preventDefault();
  try {
    let res = await fetch("/reservations/new", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        mobileNumber: mobileNumber,
      }),
    });
    let resJson = await res.json();
    if (res.status === 200) {
      setName("");
      setEmail("");
      setMobileNumber("");
      setMessage("User created successfully");
    } else {
      setMessage("Some error occured");
    }
  } catch (err) {
    console.log(err);
  }
};

return (
  <div className="App">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={mobileNumber}
        placeholder="Mobile Number"
        onChange={(e) => setMobileNumber(e.target.value)}
      />

      <button type="submit">Create</button>

      <div className="message">{message ? <p>{message}</p> : null}</div>
    </form>
  </div>
);
}