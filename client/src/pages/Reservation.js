import React from "react";
import styled from "styled-components";
import MyCart from "../components/MyCart";
import Navbar from "../components/Navbar";
import { InnerPageContainer, PageContainer } from "../components/PageContainer";

import { Link, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Marginer } from "../components/Marginer";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

export default function Reservation(props) {
  const { action } = useParams();

  return (
    <PageContainer>
      <Navbar/>
      <Marginer direction="vertical" margin="1em"/>
      <StyledInnerContainer>
        <Link to="/donation/search">
          <Button size="25px">Search food</Button>
        </Link>
        <Marginer direction="vertical" margin="1em"/>
        <MyCart initialActive={action} />
      </StyledInnerContainer>
    </PageContainer>
  );
}
