import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../components/BrandLogo";
import { Marginer } from "../components/Marginer";
import PageContainer from "../components/PageContainer";
import { Button } from "../components/Button"
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


const BackgroundContainer = styled.div `
  width: 100%;
  height:100%;
  max-width: 1152px;
  max-height: 572px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;
  background: #FFF0A2;
`

export default function Main (props) {
  return (
    <PageContainer>
      <BackgroundContainer>
        <Navbar/>
        <Marginer direction="horizontal"></Marginer>
        <Link to="/donation/new">
          <Button>Share Food</Button>
        </Link>
        <Link to="/donation/search">
          <Button>Search Food</Button>
        </Link>
      </BackgroundContainer>
    </PageContainer>

  )
}