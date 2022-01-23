import React, { useState, useCallback, useRef, useEffect } from "react";
import axios from "axios";

import {
  BoxContainer
} from "./Common";
import DonationContainer from "./DonationContainer";

 
export function DonationsShow(props) {
  const {userID} = props;
  const [donations, setDonations] = useState({});

  //sets donations to be shown on the page
  useEffect(() => {
    getDonations (userID)
  }, [])

 //sets donations to be shown on the page ----USERID IS HARDCODED FOR NOW-------------
  async function getDonations (userID)
    {
      axios.get('http://localhost:8080/donations/1')
      .then(res => { 
        setDonations(res.data);
      })
      .catch((err) => {console.log(err)})
    }

  return (
    <BoxContainer>
        {donations && Object.keys(donations).length>0 && (
        <DonationContainer donations={donations} />
        )}
    </BoxContainer>
  );
}