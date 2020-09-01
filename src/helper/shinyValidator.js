export const shinyValidator = (name, shiny, pokemon, pokeImg) => {
  if (!shiny) {
    pokemon.id > 649 && pokemon.id <= 721
      ? (pokeImg.current.src = `https://img.pokemondb.net/sprites/x-y/shiny/${name}.png`)
      : (pokeImg.current.src =
          pokemon.id > 721 && pokemon.id <= 807
            ? `https://img.pokemondb.net/sprites/ultra-sun-ultra-moon/shiny/${pokemon.name}.png`
            : pokemon.id > 807
            ? `https://img.pokemondb.net/sprites/home/shiny/${pokemon.name}.png`
            : `https://img.pokemondb.net/sprites/black-white/anim/shiny/${name}.gif`);
  } else {
    pokemon.id > 649 && pokemon.id <= 721
      ? (pokeImg.current.src = `https://img.pokemondb.net/sprites/x-y/normal/${name}.png`)
      : (pokeImg.current.src =
          pokemon.id > 721 && pokemon.id <= 807
            ? `https://img.pokemondb.net/sprites/ultra-sun-ultra-moon/normal/${pokemon.name}.png`
            : pokemon.id > 807
            ? `https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`
            : `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`);
  }
};