import { useState } from "react";
import PropertyCardContent from "./PropertyCardContent/PropertyCardContent";
import PropertyCardFooter from "./PropertyCardFooter/PropertyCardFooter";
import PropertyCardHeader from "./PropertyCardHeader/PropertyCardHeader";
import { StyledContainer } from "./PropertyCard.style";

const PropertyCard = ({ property, buttonLabel, handleButtonClick }) => {
  const [showButton, setShowButton] = useState(false);
  return (
    <StyledContainer
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <PropertyCardHeader
        logoUrl={property?.agency?.logo}
        bgColor={property?.agency?.brandingColors?.primary}
      />
      <PropertyCardContent
        showButton={showButton}
        imgUrl={property.mainImage}
        buttonTitle={buttonLabel}
        handleButtonClick={handleButtonClick}
      />
      <PropertyCardFooter price={property.price} />
    </StyledContainer>
  );
};

export default PropertyCard;
