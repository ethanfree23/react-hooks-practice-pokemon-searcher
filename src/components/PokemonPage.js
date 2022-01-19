import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const API = "http://localhost:3001/pokemon"

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then(setPokemon);
  }, []);


  function handleAddPokemon(newPokemon) {
    setPokemon([...pokemon, newPokemon]);
  }

  const pokemonToDisplay = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search onChangeSearch={setSearchTerm} />
      <br />
      <PokemonCollection pokemon={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
