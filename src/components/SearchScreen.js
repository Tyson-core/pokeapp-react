import { useState, useEffect, useRef } from "react";
import React from "react";

import validator from "validator";
import { FormSearch, SearchHelper, SelectBtn } from "./ui/ComponentsStyled";
import { useDispatch, useSelector } from "react-redux";
import { searchPokemon, getPokemons, resetResult } from "../actions/poke";

export const SearchScreen = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const { result } = useSelector((state) => state.searchPokemon);
  const inputRef = useRef();

  
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || validator.isNumeric(inputValue.trim())) {
      return;
    }
    dispatch(searchPokemon(inputValue.toLowerCase()));
  };

  const handleSelect = (name) => {
    setInputValue("");

    dispatch(searchPokemon(name));
    dispatch(resetResult());
  };

  useEffect(() => {
    !inputValue.trim() || validator.isNumeric(inputValue.trim())
      ? setError(true)
      : setError(false);

    inputValue.length > 1
      ? dispatch(getPokemons(inputValue))
      : dispatch(resetResult());
  }, [inputValue, dispatch]);

  return (
    <FormSearch onSubmit={handleSearch}>
      <div className="nes-field is-inline">
        <input
          type="text"
          id="inline_field"
          className={error ? "nes-input is-error" : "nes-input is-success"}
          placeholder="Write the name of the pokemon."
          ref={inputRef}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
      </div>
      {result.length > 0 && (
        <SearchHelper>
          {result.map((item, i) => (
            <SelectBtn key={i} onClick={() => handleSelect(item)}>
              {item.toUpperCase()}
            </SelectBtn>
          ))}
        </SearchHelper>
      )}
    </FormSearch>
  );
};
