import {
  StyledContentDiv,
  StyledContentImg,
} from "./PropertyCardContent.style";

const PropertyCardContent = ({ showButton, buttonTitle }) => {
  return (
    <StyledContentDiv>
      <StyledContentImg
        src={
          "https://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg"
        }
      />
      {showButton && buttonTitle && <button>{buttonTitle}</button>}
    </StyledContentDiv>
  );
};

export default PropertyCardContent;
