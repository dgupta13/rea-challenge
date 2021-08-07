import { StyledHeaderDiv, StyledImg } from "./PropertyCardHeader.style";

const PropertyCardHeader = () => {
  return (
    <StyledHeaderDiv bgColor={"red"}>
      <StyledImg
        src={
          "https://i2.au.reastatic.net/170x32/3015ba9710c7e3ddc2ac30f45fd7906df5b04e442a7f6948f75a6029b8b871e2/main.gif"
        }
      ></StyledImg>
    </StyledHeaderDiv>
  );
};

export default PropertyCardHeader;
