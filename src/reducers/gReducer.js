import { types } from "../types/types";

const initState = {
  result: [],
};

export const searchPokemon = (state = initState, action) => {
  switch (action.type) {
    case types.eventGetPokemons:
      return {
        ...state,
        result: [...action.payload],
      };
    case types.eventResetResult:
      return {
        ...initState,
      };

    default:
      return state;
  }
};

const initStateCard = {
  result: {},
  error: false,
};

export const cardReducer = (state = initStateCard, action) => {
  switch (action.type) {
    case types.eventGenerateCard:
      return {
        ...initState,
        result: action.payload,
      };
    case types.eventNextPokemon:
      return {
        ...state,
        result: action.payload,
      };
    case types.eventPreviousPokemon:
      return {
        ...state,
        result: action.payload,
      };
    case types.startError:
      return {
        ...initState,
        error: true,
      };
    default:
      return state;
  }
};
