// import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Link } from "react-router-dom";
import { NavbarUi, clockTop, imgNavbarStyle } from "./ComponentsStyled";
import { useDispatch } from "react-redux";
import {
  clearResultComparison,
  resetResult,
  resetCard,
} from "../../actions/poke";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const dispatch = useDispatch();
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(() => timeClock(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const timeClock = () => {
    setClock(new Date());
  };

  const handleClear = () => {
    dispatch(clearResultComparison());
    dispatch(resetResult());
    dispatch(resetCard());
  };


  return (
    <NavbarUi>
      <Link to="/" css={{ width: "0%" }} onClick={handleClear}>
        <img src="/images/pokemon.png" alt="Pokeball" css={imgNavbarStyle} />
      </Link>
      <div css={clockTop}>
        <p css={{ fontSize: "1.2rem", margin: "10px" }}>
          {clock.toLocaleTimeString()}
        </p>
      </div>
    </NavbarUi>
  );
};
