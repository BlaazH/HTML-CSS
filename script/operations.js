//lire et afficher le contenu d'une balise H1

const ContentsOfH1Tags = document.getElementsByTagName("h1");

// Afficher le contenu d'une balise H1
console.log(ContentsOfH1Tags);

//   Afficher le contenu de la premiere Balise H1

const FirstH1 = ContentsOfH1Tags[0];

console.log(FirstH1.innerHTML);

// Libellé du button

const button = document.getElementById("calculer");
console.log(button.innerHTML);
