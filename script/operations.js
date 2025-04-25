function calculer(event) {
  event.preventDefault();
  console.log("effectuer un calcul");
  const premierNombreInput = document.getElementById("premierNombre");
  const premierNombre = premierNombreInput.value;
  console.log(premierNombre);

  const secondNombreInput = document.getElementById("secondNombre");
  const secondNombre = secondNombreInput.value;
  console.log(secondNombre);

  const selectOperation = document.getElementById("operations");
  const valueOfselectOperation = selectOperation.value;
  let resultat = 0;
  if (valueOfselectOperation == 1) {
    resultat = 1 * premierNombre + 1 * secondNombre;
  } else if (valueOfselectOperation == 2) {
    resultat = Number(premierNombre) * Number(secondNombre);
  } else {
    resultat = Number(premierNombre) % Number(secondNombre);
  }
  console.log(resultat);

  document.getElementById("resultat").innerHTML = resultat;
}
