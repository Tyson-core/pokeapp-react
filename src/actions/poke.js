import { types } from "../types/types";
import axios from "axios";

const urlAPI = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=893";
const initUrl = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemons = (word) => {
  return async (dispatch) => {
    const fetch = await axios.get(urlAPI);
    const result = fetch.data;
    const dataName = result.results.map(res=>res.name);
    const dataFilter = dataName.filter(res=> res.includes(word.toLowerCase()));
    dispatch(startGetPokemon(dataFilter));
  };
};



export const searchPokemon = (poke) => {
  return async (dispatch) => {
    try {
      const fetch = await axios.get(urlAPI);
      const result = fetch.data;
      const dataName = result.results.map(res=>res.name);
      const dataFilter = dataName.filter(res=> res === poke);
      if(dataFilter[0] !== undefined){
        const fetchFilter = await axios.get(initUrl +poke);
        const result = fetchFilter.data;
        dispatch(startSearchPokemon(result))
      }else{
        dispatch(startError())
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const pokemonCompare = (poke) => {
  return async (dispatch) => {
    try {
      const fetch = await axios.get(urlAPI);
      const result = fetch.data;
      const dataName = result.results.map(res=>res.name);
      const dataFilter = dataName.filter(res=> res === poke);
      if(dataFilter[0] !== undefined){
        const fetchFilter = await axios.get(initUrl +poke);
        const result = fetchFilter.data;
        dispatch(startGetPkCompare(result))
      }
    } catch (error) {
      console.log(error);
    }
  };
};



export const nextPokemon = (id)=>{
  return async (dispatch)=>{
    const fetch = await axios.get(initUrl+id);
    const result = fetch.data;
    dispatch(startNextPokemon(result))
  }
}

export const prevPokemon = (id)=>{
  return async (dispatch)=>{
    const fetch = await axios.get(initUrl+id);
    const result = fetch.data;
    dispatch(startPrevPokemon(result))
  }
}

export const clearResultComparison =()=>({
  type:types.eventClearComparisonResult
})

export const resetCard =()=>({
  type:types.eventResetCard
})

export const startError =()=>({
  type:types.startError
})

export const resetResult =()=>({
  type:types.eventResetResult
})

const startNextPokemon =(data)=>({
  type:types.eventNextPokemon,
  payload:data
})

const startPrevPokemon =(data)=>({
  type:types.eventPreviousPokemon,
  payload:data
})

const startSearchPokemon = (data) => ({
  type: types.eventGenerateCard,
  payload: data
});

const startGetPokemon = (data) => ({
  type: types.eventGetPokemons,
  payload: data
});


const startGetPkCompare =(data)=>({
  type:types.eventGetComparePokemon,
  payload:data
})