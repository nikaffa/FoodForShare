import React from "react";
import { BrandLogo } from "../components/BrandLogo";
import { Marginer } from "../components/Marginer";
import {PageContainer, InnerPageContainer, BackgroundContainer}from "../components/PageContainer";
import { Button } from "../components/Button"
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Main (props) {
  const { logoSize, hideLogo } = props;

  return (
    <PageContainer>
      <Navbar useTransparent />
      <Marginer direction="vertical" margin="5em"/>
      <BrandLogo logoSize/>
      <InnerPageContainer>
        <BackgroundContainer>
          <Marginer direction="vertical" margin="5em" />
          <Link to="/donation/new">
            <Button>Share Food</Button>
          </Link>
          <Marginer direction="vertical" margin="5em" />
          <Link to="/donation/search">
            <Button>Search Food</Button>
          </Link>
        </BackgroundContainer>
      </InnerPageContainer>
    </PageContainer>

  )
}