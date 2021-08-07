import PropertyCardContent from "./PropertyCardContent/PropertyCardContent";
import PropertyCardFooter from "./PropertyCardFooter/PropertyCardFooter";
import PropertyCardHeader from "./PropertyCardHeader/PropertyCardHeader";
import { StyledContainer } from "./PropertyCard.style";

const PropertyCard = () => {
  return (
    <StyledContainer>
      <PropertyCardHeader />
      <PropertyCardContent />
      <PropertyCardFooter />
    </StyledContainer>
  );
};

export default PropertyCard;
