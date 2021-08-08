import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledFlexContainer } from "./App.style";
import PropertyCardList from "./components/PropertyCardList/PropertyCardList";
import { ADD_BUTTON_LABEL, REMOVE_BUTTON_LABEL } from "./lang/constants";
import { fetchPropertyData } from "./modules/AppApi";

/**
 *
 * @returns This is the root level component which has two child component one for results properites and other for saved properties
 */
const App = () => {
  const dispatch = useDispatch();
  const resultProperties = useSelector(
    (state) => state.rootApp.resultProperties
  );
  const savedProperties = useSelector((state) => state.rootApp.savedProperties);

  useEffect(() => {
    dispatch(fetchPropertyData());
  }, [dispatch]);

  return (
    <StyledFlexContainer>
      <PropertyCardList
        title={"Results"}
        properties={resultProperties}
        label={ADD_BUTTON_LABEL}
      />
      <PropertyCardList
        title={"Saved properties"}
        properties={savedProperties}
        label={REMOVE_BUTTON_LABEL}
      />
    </StyledFlexContainer>
  );
};

export default App;
