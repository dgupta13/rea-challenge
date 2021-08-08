import styled from "styled-components";

export const StyledContentDiv = styled.div`
  border-bottom: 2px solid grey;
  position: relative;
  overflow: hidden;
  & > button {
    position: absolute;
    border-radius: 50px;
    top: 80%;
    left: 0;
    width: 100%;
    cursor: pointer;
    color: green;
    border-color: green;
  }
`;
export const StyledContentImg = styled.img`
  width: 100%;
  display: block;
`;
