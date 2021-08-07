import { useState } from "react";
import PropertyCardContent from "./PropertyCardContent/PropertyCardContent";
import PropertyCardFooter from "./PropertyCardFooter/PropertyCardFooter";
import PropertyCardHeader from "./PropertyCardHeader/PropertyCardHeader";
import { StyledContainer } from "./PropertyCard.style";

const PropertyCard = () => {
  const [showButton, setShowButton] = useState(false);
  return (
    <StyledContainer
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <PropertyCardHeader />
      <PropertyCardContent showButton={showButton} />
      <PropertyCardFooter />
    </StyledContainer>
  );
};

export default PropertyCard;
