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
  console.log(typeof valueOfselectOperation);
  let resultat = 0;
  if (Number(valueOfselectOperation) == 1) {
    resultat = 1 * premierNombre + 1 * secondNombre;
  } else if (Number(valueOfselectOperation) == 2) {
    resultat = Number(premierNombre) * Number(secondNombre);
  } else {
    resultat = Number(premierNombre) % Number(secondNombre);
  }
  console.log(resultat);

  const Name = document.getElementById("name");
  const nameInput = Name.value;
  console.log("Name" + nameInput);

  // les initiales
  const firstNameAndLastname = nameInput.split("");
  console.log(firstNameAndLastname);

  // concatenation

  let nameAndResultat = nameInput + " " + resultat;

  //longueur d'une chaine de caractère
  const lenght = nameAndResultat.length;
  console.log(lenght);

  document.getElementById("resultat").innerHTML = nameAndResultat;
}
