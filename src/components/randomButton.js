// TODO: put props in the RandomButton function parameters
// page.js should have passed in setRandomPokemon as a function

export default function RandomButton() {
  function handleClick() {
    // TODO: Simply call the setRandomFunction() that was passed in as a prop.
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
