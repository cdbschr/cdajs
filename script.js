//Dans un premier temps, je récupère la valeur de l'input
let input = document.getElementById("input");

//Je crée une variable qui va contenir la valeur de l'input
let inputValue = parseInt(input.value);

//Je récupère le bouton
let button = document.getElementById("button");  

//Le click sur le boutton va créer item dans le sessionStorage et recharger la page afin d'afficher les valeurs
button.addEventListener("click", () => {
  sessionStorage.setItem("restart", "true");

  document.location.reload();
});

//Fonction qui chercher un item dans le sessionStorage et qui vérifie qu'il est bien supprimé lors du reload afin d'afficher les valeurs
window.onload = () => {
  let restart = sessionStorage.getItem("restart");

  if(restart) {
    sessionStorage.removeItem("restart");
    display();
  }
}

// Je crée mes conditions par rapport à la valeur de l'input dans une fonction
function display() {
  //Je définis mes valeurs pour la musique
  const valueMin = 0;
  const valueOne = 1;
  const valueTwo = 2;
  const valueMax = 99;
  //Je récupère mes valeurs dans le html
  let number = document.getElementsByClassName("number");
  let magasin = document.getElementById("magasin");
  let plusieurs = Array.from(document.getElementsByClassName("plusieurs"));
  let minusOne = document.getElementsByClassName("numberMinusOne");
  let p = document.getElementsByTagName("p");

  if (inputValue > valueMax) {
    //je définis au premier paragraph un id pour la couleur de fond
    p[0].setAttribute("id", "alert");
    //et lui rajoute un texte humoristique
    p[0].innerText = "Oulaa ! Ça fait un peu beaucoup là, non ? Le stock maximum est de 99 bolées.";
    number[0].innerText = valueMax;
    number[1].innerText = valueMax;
    minusOne[0].innerHTML = valueMax - valueOne;

  } else if (inputValue < valueMin) {
    p[0].setAttribute("id", "alert");
    p[0].innerText = "C'était peut-être pas sans alcool. Un inventaire est nécessaire.";
    number[0].innerText = valueMin;
    number[1].innerText = valueMin;
    minusOne[0].innerHTML = valueMax;
    magasin.innerText = "Vas au supermarché pour en acheter, ";

  } else if (inputValue == valueTwo) {
    number[0].innerText = inputValue;
    number[1].innerText = inputValue;
    plusieurs[2].innerText= '';
    minusOne[0].innerHTML = inputValue - valueOne;
    
  } else if (inputValue == valueOne) {
    number[0].innerText = inputValue;
    number[1].innerText = inputValue;
    plusieurs[0].innerText= '';
    plusieurs[1].innerText= '';
    minusOne[0].innerHTML = "Plus de ";

  } else if (inputValue == valueMin) {
    number[0].innerText = "Plus de ";
    number[1].innerText = "Plus de ";
    minusOne[0].innerHTML = valueMax;
    magasin.innerText = "Vas au supermarché pour en acheter, ";
  
  } else {
    number[0].innerText = inputValue;
    number[1].innerText = inputValue;
    minusOne[0].innerHTML = inputValue - valueOne;
  }
}