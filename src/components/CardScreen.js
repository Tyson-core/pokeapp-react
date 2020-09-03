/** @jsx jsx */
import { jsx } from "@emotion/core";
import {
  Card,
  CardBody,
  ButtonSec,
  maxQ,
  minQ,
  pInTop,
  cardImg,
  colorType,
  bgColor,
  exitModalBtn,
} from "./ui/ComponentsStyled";
import validator from "validator";

import { useSelector, useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { NextPrev } from "./NextPrev";
import { shinyValidator } from "../helper/shinyValidator";
import { ChartStats } from "./ChartStats";
import { useHistory } from "react-router-dom";
import { pokemonCompare } from "../actions/poke";

export const CardScreen = () => {
  let pokeAbi;
  let pokeType;
  let baseStats;
  let color;

  const [shiny, setShiny] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showError, setShowError] = useState(false);
  const [compareValue, setCompareValue] = useState("");
  const [errorAlert, setErrorAlert] = useState(null);

  const { result } = useSelector((state) => state.cardReducer);
  const { result: compareResult } = useSelector((state) => state.compareResult);
  const verification = Object.keys(result).length === 0;
  const compareVerification = Object.keys(compareResult).length === 0;

  const history = useHistory();
  const pokeImg = useRef();
  const dialogModal = useRef();
  const inputCompare = useRef();

  if (!verification) {
    pokeAbi = result.abilities.map((res) => res.ability.name.toUpperCase());
    baseStats = result.stats.map((res) => res.base_stat);
    pokeType = result.types.map((res) => res.type.name.toUpperCase());
    const findType = colorType.find(
      (res) => pokeType[0].toLowerCase().indexOf(res) > -1
    );
    color = bgColor[findType];
  }

  const handleShiny = (name) => {
    shinyValidator(name, shiny, result, pokeImg);

    setShiny(!shiny);
  };

  const dispatch = useDispatch();

  const handleStats = () => {
    setShowStats(!showStats);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (validator.isNumeric(compareValue.trim())) {
      setShowError(true);
      setErrorAlert("Ups! Pokemon not found.");
      return;
    }

    if (!compareValue.trim()) {
      return;
    }
    if (compareValue.toLowerCase() === result.name) {
      return;
    }
    if (compareVerification) {
      setShowError(true);
      setErrorAlert("Ups! Pokemon not found.");
      return;
    }

    history.push("/compare");
  };

  const handleShowModal = () => {
    dialogModal.current.showModal();
    inputCompare.current.focus();
  };

  const handleCloseModal = () => {
    dialogModal.current.close();
    setCompareValue("");
  };

  useEffect(() => {
    if (compareValue.toLowerCase() === result.name) {
      setShowError(true);
      setErrorAlert(
        "Verify that the name is not the same as the current Pokemon"
      );
      return;
    } else {
      setShowError(false);
    }
    dispatch(pokemonCompare(compareValue.toLowerCase()));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compareValue]);

  return !verification ? (
    <section>
      <div css={{ [minQ[1]]: { display: "flex", justifyContent: "center" } }}>
        <Card css={{ [minQ[1]]: { width: "466px" }, backgroundColor: color }}>
          <p css={pInTop}>{result.name.toUpperCase()}</p>

          <CardBody>
            <img
              src={
                result.id > 649 && result.id <= 721
                  ? `https://img.pokemondb.net/sprites/x-y/normal/${result.name}.png`
                  : result.id > 721 && result.id <= 807
                  ? `https://img.pokemondb.net/sprites/ultra-sun-ultra-moon/normal/${result.name}.png`
                  : result.id > 807
                  ? `https://img.pokemondb.net/sprites/home/normal/${result.name}.png`
                  : `https://img.pokemondb.net/sprites/black-white/anim/normal/${result.name}.gif`
              }
              alt="imgpoke"
              css={cardImg}
              ref={pokeImg}
            />
            <div
              css={{
                [maxQ[0]]: { marginLeft: "10px" },
                [minQ[1]]: { marginLeft: "20px" },
              }}
            >
              <p>Number: {result.id}</p>
              <p>Abilities: {pokeAbi.join(" - ")}</p>
              <p>Type: {pokeType.join(" - ")}</p>
            </div>
            <ButtonSec>
              <button
                type="button"
                className={shiny ? "nes-btn" : "nes-btn is-warning"}
                css={{ height: "40px", marginRight: "20px" }}
                onClick={() => handleShiny(result.name)}
              >
                {shiny ? "Normal" : "Shiny"}
              </button>

              <button
                type="button"
                className="nes-btn is-primary"
                css={{ height: "40px", marginRight: "20px" }}
                onClick={handleStats}
              >
                Stats
              </button>

              <button
                type="button"
                className="nes-btn"
                onClick={handleShowModal}
                css={{ [maxQ[4]]: { marginTop: "12px" } }}
              >
                Compare?
              </button>
            </ButtonSec>
          </CardBody>
        </Card>
      </div>

      <NextPrev
        id={result.id}
        setShiny={setShiny}
        setShowStats={setShowStats}
      />

      {showStats && <ChartStats color={color} baseStats={baseStats} />}
      <section
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <dialog
          className="nes-dialog"
          id="dialog-rounded"
          ref={dialogModal}
          css={{
            [maxQ[0]]: { margin: "0.3rem" },
            [minQ[1]]: { maxWidth: "50%" },
            [minQ[3]]: { maxWidth: "34%" },
          }}
        >
          <button
            type="button"
            className="nes-btn is-error"
            css={exitModalBtn}
            onClick={handleCloseModal}
          >
            X
          </button>
          <form onSubmit={handleModalSubmit}>
            <p>Write the name of the pokemon you want to compare.</p>
            <div className="nes-field">
              <input
                type="text"
                id="name_field"
                className="nes-input"
                ref={inputCompare}
                value={compareValue}
                onChange={(e) => setCompareValue(e.target.value)}
              />
            </div>
            {showError && (
              <p
                className="nes-text is-error"
                css={{ marginTop: "15px", marginBottom: "5px" }}
              >
                {errorAlert}
              </p>
            )}
          </form>
        </dialog>
      </section>
    </section>
  ) : (
    <div css={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>
      <img src="./images/pika.gif" alt="img" css={{ width: "200px" }} />
    </div>
  );
};
