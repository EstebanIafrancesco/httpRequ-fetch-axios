fetch("https://pokeapi.co/api/v2/pokemon/25000/")
  .then((response) => response.json())
  .then((pokemon) => {
    console.log(pokemon.name);
  })
  .catch(() => {
      alert('No existen tanto tampooooooco...');
  });
  const getBtn = document.getElementById("get-btn");
  getBtn.addEventListener("click", getData);

