"use client";

import { useState, useEffect } from "react";
import PokemonCard from "../components/pokemonCard";
import RandomButton from "../components/randomButton";

export default function Home() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [activePokemon, setActivePokemon] = useState(undefined);
  // TODO: Create a new useState variable for randomPokemonNum
  // The default value for this should be null

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((res) => res.json())
      .then((data) => setPokemonArray(data.results));
  }, []);

  useEffect(() => {
    if (pokemonArray.length > 0) {
      getPokemonDetails(0);
    }
  }, [pokemonArray]);

  // TODO: Create a new useEffect call that has [randomPokemonNum] as the second parameter
  // This will run the useEffect callback function whenever randomPokemonNum changes
  // When the number changes, call getPokemonDetails(randomPokemonNum)
  // Be sure check if getRandomNum is not null

  // TODO: Fix this function
  function setRandomPokemon() {
    // should set the randomPokemonNum that you created to be equal to a number
    // between 0 and the length of the pokemon array
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    // Use that website to help you with the random logic.
  }

  function getPokemonDetails(index) {
    fetch(pokemonArray[index].url)
      .then((res) => res.json())
      .then((data) => setActivePokemon(data));
  }

  return (
    <main>
      {activePokemon ? (
        <div>
          <PokemonCard pokemon={activePokemon} />
          {/* TODO: Pass the setRandomPokemon function as a prop to RandomButton */}
          <RandomButton />
        </div>
      ) : (
        <div>Awaiting Results...</div>
      )}
    </main>
  );
}
