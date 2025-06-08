export default function RandomButton(props) {
  function handleClick() {
    props.setRandomPokemon();
    console.log("clicked!");
  }
  return (
    <div className="button-container">
      <button onClick={handleClick} className="button">
        Get Random Pokemon
      </button>
    </div>
  );
}
