// import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import { Link } from "react-router-dom";
import { NavbarUi } from "./ComponentsStyled";
import { useDispatch } from "react-redux";
import { clearResultComparison, resetResult, resetCard } from "../../actions/poke";

export const Navbar = () => {
  const style = css({ height: "115%" });

  const dispatch = useDispatch()
  const handleClear = ()=>{
    dispatch(clearResultComparison())
    dispatch(resetResult())
    dispatch(resetCard())
  }
  return (
    <NavbarUi>
      <Link to="/" css={{ width: "0%" }} onClick={handleClear}>
        <img src="/images/pokemon.png" alt="Pokeball" css={style} />
      </Link>
    </NavbarUi>
  );
};
