import PropertyCard from "../PropertyCard/PropertyCard";
import { StyledResultColumn } from "./ResultColumn.style";

const ResultColumn = () => {
  return (
    <StyledResultColumn>
      <div>
        <PropertyCard />
      </div>
      <div>
        <PropertyCard />
      </div>
    </StyledResultColumn>
  );
};

export default ResultColumn;
