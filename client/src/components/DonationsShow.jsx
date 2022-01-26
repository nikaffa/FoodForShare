import React, { useState, useCallback, useRef, useEffect } from "react";
import axios from "axios";
import useUser from "../hooks/useUser";

import {
  BoxContainer
} from "./Common";
import DonationContainer from "./DonationContainer";

 
export function DonationsShow(props) {
  const { user } = useUser();
  const [donations, setDonations] = useState({});

  //sets donations to be shown on the page
  useEffect(() => {
    getDonations (user)
  }, [])

  useEffect(() => {
    getDonations (user)
  }, [user])

 //sets donations to be shown on the page
  const getDonations =(userID) =>
  {
    axios.get(`http://localhost:8080/donations/user/${userID}`)
    .then(res => { 
      setDonations(res.data);
    })
    .catch((err) => {console.log(err)})
  }

  return (
    <>
      {/* <h1>Donations of User {user}</h1> */}
      <BoxContainer>
          {donations && Object.keys(donations).length>0 && (
          <DonationContainer donations={donations} />
          )}
      </BoxContainer>
    </>
  );
}