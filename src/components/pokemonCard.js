export default function PokemonCard(props) {
  console.log(props.pokemon);
  return (
    <div className="pokemon-card">
      <img
        src={props.pokemon.sprites.other["official-artwork"].front_default}
        alt={props.pokemon.name}
      />
      <div className="pokemon-details">
        <h2>{props.pokemon.name}</h2>
        <div className="types">
          {props.pokemon.types.map((data, i) => (
            <div key={i} className="type">
              {data.type.name}
            </div>
          ))}
        </div>
        <div className="abilities">
          <span className="label">Abilities:</span>
          {props.pokemon.abilities.map((data, i) => (
            <span key={i}>{data.ability.name}</span>
          ))}
        </div>
        <div className="height-weight">
          <span className="label">Height:</span>
          <span>{props.pokemon.height}</span>
          <span className="label">Weight:</span>
          <span>{props.pokemon.weight}</span>
        </div>
      </div>
    </div>
  );
}
