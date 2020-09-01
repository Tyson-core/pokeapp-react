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
  exitModalBtn
} from "./ui/ComponentsStyled";
import { useSelector } from "react-redux";
import { useState, useRef } from "react";
import { NextPrev } from "./NextPrev";
import { shinyValidator } from "../helper/shinyValidator";
import { ChartStats } from "./ChartStats";

export const CardScreen = () => {
  let pokeAbi;
  let pokeType;
  let baseStats;
  const [shiny, setShiny] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const { result } = useSelector((state) => state.cardReducer);
  const verification = Object.keys(result).length === 0;

  const pokeImg = useRef();
  const dialogModal = useRef();

  let color;

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

  const handleStats = () => {
    setShowStats(!showStats);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
  };


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
              alt="imgpoke" css={cardImg}ref={pokeImg} />
            <div css={{
                [maxQ[0]]: { marginLeft: "10px" },
                [minQ[1]]: { marginLeft: "20px" }
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

              {/* <button
                type="button"
                className="nes-btn"
                onClick={()=>dialogModal.current.showModal()}
                css={{[maxQ[4]]:{marginTop:'12px'}}}
              >
                Compare?
              </button> */}
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
      {/* <section
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <dialog className="nes-dialog" id="dialog-rounded" ref={dialogModal}
        css={{[maxQ[0]]:{margin:'0.3rem'}}} >
          <button type="button" className="nes-btn is-error" css={exitModalBtn}
          onClick={()=>dialogModal.current.close()}>X</button>
          <form onSubmit={handleModalSubmit}>
            <p>Write the name of the pokemon</p>
            <p>you want to compare.</p>
            <div className="nes-field">
              <input type="text" id="name_field" className="nes-input" />
            </div>
          </form>
        </dialog>
      </section> */}
    </section>
  ) : (
    <div css={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>
      <img src="./images/pika.gif" alt="img" css={{ width: "200px" }} />
    </div>
  );
};
