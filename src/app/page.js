"use client";

import { useState, useEffect } from "react";
import PokemonCard from "../components/pokemonCard";
import RandomButton from "../components/randomButton";

export default function Home() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [activePokemon, setActivePokemon] = useState(undefined);
  const [randomPokemonNum, setRandomPokemon] = useState(null);

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

  useEffect(() => {
    if (randomPokemonNum != null) {
      getPokemonDetails(randomPokemonNum)
    }
  }, [randomPokemonNum]);

  function setRandomPokemon() {
    randomPokemonNum = getRandomInt(pokemonArray.length)
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
