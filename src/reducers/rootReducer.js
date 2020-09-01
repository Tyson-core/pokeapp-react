import { combineReducers } from "redux";
import { cardReducer, searchPokemon } from "./gReducer";

export const rootReducer = combineReducers({
  searchPokemon,
  cardReducer
});
