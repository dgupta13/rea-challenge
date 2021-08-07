import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { StyledFlexContainer } from "./App.style";
import ResultColumn from "./components/ResultColumn/ResultColumn";
import { fetchPropertyData } from "./modules/AppApi";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPropertyData());
  }, [dispatch]);

  return (
    <StyledFlexContainer>
      <div>
        <ResultColumn />
      </div>
      <div>
        <ResultColumn />
      </div>
    </StyledFlexContainer>
  );
};

export default App;
