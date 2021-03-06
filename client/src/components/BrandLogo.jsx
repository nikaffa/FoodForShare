import styled from "styled-components";
import LogoImg from "../images/Foodforshare.png";
import { Link } from "react-router-dom";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
  
`;

const LogoImage = styled.div`
  animation:
  width: ${({ size }) => (size ? size + "px" : "4em")};
  height: ${({ size }) => (size ? size + "px" : "4em")};
  img {
    width: 100%;
    height: 100%;
  }
  
`;

export const LogoTitle = styled.h2`
  margin: 0;
  font-family: Roboto;
  font-size: ${({ size }) => (size ? size + "px" : "20px")};
  color: ${({ color }) => (color ? color : "#white")};
  font-weight: 900;
  margin-left: 6px;
  
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export function BrandLogo(props) {
  const { logoSize, hideLogo } = props;

  return (
    <BrandLogoContainer>
      {!hideLogo && (
        <Link to="/">
          <LogoImage size={logoSize}>
            <img src={LogoImg} alt="FoodforShare logo" />
          </LogoImage>
        </Link>
      )}
    </BrandLogoContainer>
  );
}