function calculer() {
  console.log("effectuer un calcul");
  const FirstNumberinput = document.getElementById("firstNumber");
  const valueOfFirstNumberinput = FirstNumberinput.value;
  console.log(valueOfFirstNumberinput);
  const secondNumberinput = document.getElementById("secondNumber");
  const valueOfsecondNumberinput = secondNumberinput.value;
  console.log(valueOfsecondNumberinput);

  result = 1 * valueOfFirstNumberinput + 1 * valueOfsecondNumberinput;
  console.log(result);
}
