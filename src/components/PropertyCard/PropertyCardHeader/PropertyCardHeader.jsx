import { StyledHeaderDiv, StyledImg } from "./PropertyCardHeader.style";

const PropertyCardHeader = ({ logoUrl, bgColor }) => {
  return (
    <StyledHeaderDiv bgColor={bgColor}>
      <StyledImg src={logoUrl}></StyledImg>
    </StyledHeaderDiv>
  );
};

export default PropertyCardHeader;
