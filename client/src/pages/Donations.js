import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { InnerPageContainer, PageContainer } from "../components/PageContainer";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Marginer } from "../components/Marginer";
import { SubmitButton } from "../components/Common";
import { ContentCard } from "../components/ContentCard";
import axios from "axios";



const StyledInnerContainer = styled(InnerPageContainer)`
  margin-left: 4em;
  margin-right: 4em;
  margin-bottom: 4em;

`;

export default function Donations(props) {

  const [status, setStatus] = useState(null);

  useEffect(() => {
      axios.delete('https://localhost:3000/donation/:id/delete')
          .then(() => setStatus('Delete successful'));
  }, []);

  return (
    <PageContainer>
      <Navbar/>
      <Marginer direction="vertical" margin="2em"/>
      <Link to="/donation/new">
        <Button size="0.25px">Add Donation</Button>
      </Link>
      <Marginer direction="vertical" margin="2em"/>
      <StyledInnerContainer>
          <ContentCard layout={'column'}>
            {this.state.donations.map(donation => <h3 key={donation.id}>{donation.name}</h3>)}
            <Marginer direction="vertical" margin="1em"/>
            <Link to="/donation/:id/edit">
              <SubmitButton size={"0.25px"}>Edit</SubmitButton>
            </Link>
            <Marginer direction="vertical" margin="1em"/>
            <Link to="/donation/:id/delete">
              <SubmitButton size={"0.25px"} onSubmit={status}>Delete</SubmitButton>
            </Link>
            <Marginer direction="vertical" margin="2em"/>
          </ContentCard>
       
      </StyledInnerContainer>
    </PageContainer>
  );
}