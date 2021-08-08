import {
  StyledContentDiv,
  StyledContentImg,
} from "./PropertyCardContent.style";

const PropertyCardContent = ({
  showButton,
  buttonTitle,
  imgUrl,
  handleButtonClick,
}) => {
  return (
    <StyledContentDiv>
      <StyledContentImg src={imgUrl} />
      {showButton && buttonTitle && (
        <button onClick={handleButtonClick}>{buttonTitle}</button>
      )}
    </StyledContentDiv>
  );
};

export default PropertyCardContent;
