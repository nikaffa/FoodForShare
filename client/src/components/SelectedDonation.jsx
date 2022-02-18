import styled from "styled-components";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
  
`;

export const LogoTitle = styled.h2`
  margin: 0;
  font-family: Roboto;
  font-size: ${({ size }) => (size ? size + "px" : "20px")};
  color: ${({ color }) => (color ? color : "#white")};
  font-weight: 900;
  margin-left: 6px;
  
`;

export function SelectedDonation(props) {
  const { donor } = props;

  return (
    <BrandLogoContainer>
      {donor}
    </BrandLogoContainer>
  );
}