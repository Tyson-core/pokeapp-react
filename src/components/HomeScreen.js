/** @jsx jsx */
import { jsx } from "@emotion/core";

import { HomeContainer, maxQ } from "./ui/ComponentsStyled";
import { SearchScreen } from "./SearchScreen";
import { CardScreen } from "./CardScreen";

export const HomeScreen = () => {

  return (
    <div>
      <HomeContainer css={{[maxQ[0]]:{margin:'10px'}}}>
        <h1 css={{ textAlign: "center" }}>Welcome to the PokeApp!</h1>
        <SearchScreen />
        <CardScreen />
      </HomeContainer>
    </div>
  );
};
