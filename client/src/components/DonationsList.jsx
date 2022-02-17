import React, { useState, useEffect } from "react";
import axios from "axios";
import useUser from "../hooks/useUser";

import { BoxContainer } from "./Common";
import DonationContainer from "./DonationContainer";

export function DonationsList(props) {
  const { user } = useUser();
  const [donations, setDonations] = useState({});

  //sets donations to be shown on the page
  useEffect(() => {
    getDonations (user)
  }, [user])

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
      <BoxContainer>
          {donations && Object.keys(donations).length>0 && (
          <DonationContainer donations={donations} />
          )}
      </BoxContainer>
    </>
  );
}