function calculer(event) {
  event.preventDefault();
  console.log("effectuer un calcul");
  const premierNombreInput = document.getElementById("premierNombre");
  const premierNombre = premierNombreInput.value;
  console.log(premierNombre);

  const secondNombreInput = document.getElementById("secondNombre");
  const secondNombre = secondNombreInput.value;
  console.log(secondNombre);

  const resultat = 1 * premierNombre + 1 * secondNombre;
  console.log(resultat);

  document.getElementById("resultat").innerHTML = resultat;
}
