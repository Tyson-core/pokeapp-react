/** @jsx jsx */
import { jsx } from "@emotion/core";
import { NextPrevBtn } from "./ui/ComponentsStyled";
import { useDispatch } from "react-redux";
import { nextPokemon, prevPokemon } from "../actions/poke";
import { useState, useEffect } from "react";

export const NextPrev = ({ id,setShiny }) => {
  const dispatch = useDispatch();
  const [errorP, setErrorP] = useState(false);
  const [errorN, setErrorN] = useState(false);

  const handlePrevious = (id) => {
    if (id - 1 === 0) {
      return;
    }
    setShiny(false)
    dispatch(prevPokemon(id - 1));
  };
  const handleNext = (id) => {
    if (id + 1 === 894) {
      return;
    }
    setShiny(false)
    dispatch(nextPokemon(id + 1));
  };



  useEffect(() => {
    id - 1 === 0 ? setErrorP(true) : setErrorP(false);
    id + 1 === 894 ? setErrorN(true) : setErrorN(false);
  }, [id]);

  return (
      <NextPrevBtn>
        <button
          type="button"
          disabled={errorP}
          className={errorP ? "nes-btn is-error" : "nes-btn is-success"}
          css={{ marginRight: "20px" }}
          onClick={() => handlePrevious(id)}
        >
          {"<"}
        </button>
        <button
          type="button"
          disabled={errorN}
          className={errorN ? "nes-btn is-error" : "nes-btn is-success"}
          onClick={() => handleNext(id)}
        >
          {">"}
        </button>
      </NextPrevBtn>
  );
};
