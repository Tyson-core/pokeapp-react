/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useSelector, useDispatch } from "react-redux";
import {
  cardImg,
  compareStyleCard,
  wrongPlaceStyle,
} from "../ui/ComponentsStyled";
import { clearResultComparison } from "../../actions/poke";
import { useHistory } from "react-router-dom";
import { ChartScreen } from "./ChartScreen";

export const ChartCompareScreen = () => {
  const { result: resultCompare } = useSelector((state) => state.compareResult);
  const { result: resultCard } = useSelector((state) => state.cardReducer);
  const verification = Object.keys(resultCompare).length === 0;

  const dispatch = useDispatch();
  const handleHistory = useHistory();

  const handleBack = () => {
    handleHistory.push("/");
    dispatch(clearResultComparison());
  };

  return !verification ? (
    <div>
      <div>
        <div css={{ margin: "20px" }}>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
        <div css={compareStyleCard}>
          <div className="nes-container with-title is-centered">
            <p className="title">{resultCard.name.toUpperCase()}</p>
            <img
              src={
                resultCard.id > 649 && resultCard.id <= 721
                  ? `https://img.pokemondb.net/sprites/x-y/normal/${resultCard.name}.png`
                  : resultCard.id > 721 && resultCard.id <= 807
                  ? `https://img.pokemondb.net/sprites/ultra-sun-ultra-moon/normal/${resultCard.name}.png`
                  : resultCard.id > 807
                  ? `https://img.pokemondb.net/sprites/home/normal/${resultCard.name}.png`
                  : `https://img.pokemondb.net/sprites/black-white/anim/normal/${resultCard.name}.gif`
              }
              alt="pokeImg"
              css={cardImg}
            />
          </div>
          <div className="nes-container with-title is-centered">
            <p className="title">{resultCompare.name.toUpperCase()}</p>
            <img
              src={
                resultCompare.id > 649 && resultCompare.id <= 721
                  ? `https://img.pokemondb.net/sprites/x-y/normal/${resultCompare.name}.png`
                  : resultCompare.id > 721 && resultCompare.id <= 807
                  ? `https://img.pokemondb.net/sprites/ultra-sun-ultra-moon/normal/${resultCompare.name}.png`
                  : resultCompare.id > 807
                  ? `https://img.pokemondb.net/sprites/home/normal/${resultCompare.name}.png`
                  : `https://img.pokemondb.net/sprites/black-white/anim/normal/${resultCompare.name}.gif`
              }
              alt="pokeImg"
              css={cardImg}
            />
          </div>
        </div>
      </div>
      <ChartScreen />
    </div>
  ) : (
      <div>
    <div css={wrongPlaceStyle}>
            <button
      type="button"
      className="nes-btn is-primary"
      onClick={handleBack}
      css={{marginBottom:'40px'}}
    >
      Back
    </button>
      <h3>Ups! Pokemon not found.</h3>
      <img src="./images/gimme.gif" alt="pika" css={{ marginTop: "20px" }} />
    </div>
    </div>
  );
};
