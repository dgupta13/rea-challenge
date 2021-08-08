import { useDispatch } from "react-redux";
import { ADD_BUTTON_LABEL } from "../../lang/constants";
import { addProperty, removeProperty } from "../../modules/AppAction";
import PropertyCard from "../PropertyCard/PropertyCard";
import { StyledList } from "./PropertyCardList.style";

const PropertyCardList = ({ title, properties, label, handleButtonClick }) => {
  const dispatch = useDispatch();
  const propertyList =
    properties &&
    properties.map((item) => (
      <div key={item.id}>
        <PropertyCard
          property={item}
          buttonLabel={label}
          handleButtonClick={() => {
            dispatch(
              label === ADD_BUTTON_LABEL
                ? addProperty(item.id)
                : removeProperty(item.id)
            );
          }}
        />
      </div>
    ));

  return (
    <StyledList>
      <div>{title}</div>
      {propertyList}
    </StyledList>
  );
};

export default PropertyCardList;
