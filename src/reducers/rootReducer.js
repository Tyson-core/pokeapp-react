import { combineReducers } from "redux";
import { cardReducer, searchPokemon, compareResult } from "./gReducer";

export const rootReducer = combineReducers({
  searchPokemon,
  cardReducer,
  compareResult
});
