import { StyledFooterDiv } from "./PropertyCardFooter.style";

const PropertyCardFooter = ({ price }) => {
  return <StyledFooterDiv>Price: {price}</StyledFooterDiv>;
};

export default PropertyCardFooter;
