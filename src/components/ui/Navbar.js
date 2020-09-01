// import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import { Link } from "react-router-dom";
import { NavbarUi, maxQ } from "./ComponentsStyled";

export const Navbar = () => {
  const style = css({ height: "115%" });

  return (
    <NavbarUi>
      <Link to="/" css={{ width: "0%" }}>
        <img src="/images/pokemon.png" alt="Pokeball" css={style} />
      </Link>
      {/* <Link to="compare" className="nes-btn is-primary"
      css={{ [maxQ[0]]:{padding:'0!important',margin:'0!important'}}}>
        Compare
      </Link> */}
    </NavbarUi>
  );
};
