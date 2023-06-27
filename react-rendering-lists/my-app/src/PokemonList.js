function PokemonList(props) {
  const { pokedex } = props;

  return (
    <ul>
      {pokedex.map((pokemon) => (
        <li key={pokemon.number}>{pokemon.name}</li>
      ))}
    </ul>
  );
}

export default PokemonList;
