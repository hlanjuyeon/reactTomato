import React from "react";
import { GlobalStyle, StyledH1 } from "./styled";
import { Mac } from "./mac";

export const Zero = () => {

  return (
    <>
      <GlobalStyle />
      <StyledH1 data-shadow='WELCOME !'>
        WELCOME !
      </StyledH1>
      <StyledH1 data-shadow='Trip to Do List✈️'>
        Trip to Do List ✈️
      </StyledH1>
      <Mac />
    </>
  );
}
