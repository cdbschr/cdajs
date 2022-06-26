//Dans un premier temps, je récupère la valeur de l'input
let input = document.getElementById("input");

//Je crée une variable qui va contenir la valeur de l'input
let inputValue = parseInt(input.value);

//Je récupère le bouton
let button = document.getElementById("button");  

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
  //Contient un texte humoristique (normalement)
  let alert = document.getElementById("alert");

//Le bouton va appeler la fonction display
button.addEventListener("click", () => {
  // location.reload();
  display();
});

// Je crée mes conditions par rapport à la valeur de l'input
function display() {
  conditionDisplay();
}

function conditionDisplay() {
  if (inputValue > valueMax) {
    alert.innerText = "Oulaa ! Ça fait un peu beaucoup là, non ? Le stock maximum est de 99 bolées.";
    number[0].innerText = valueMax;
    number[1].innerText = valueMax;
    minusOne[0].innerHTML = valueMax - 1;
    magasin.innerText = "Bois en une et au suivant ! ";

  } else if (inputValue < valueMin) {
    alert.innerText = "C'était sans alcool il me semble ?";
    number[0].innerText = valueMin;
    number[1].innerText = valueMin;
    minusOne[0].innerHTML = valueMax;
    magasin.innerText = "Vas au supermarché pour en acheter, ";

  } else if (inputValue == valueOne) {
    number[0].innerText = inputValue;
    number[1].innerText = inputValue;
    plusieurs[0].innerText= '';
    plusieurs[1].innerText= '';
    minusOne[0].innerHTML = "Plus de ";
    magasin.innerText = "Bois en une et au suivant ! ";

  } else if (inputValue == valueTwo) {
    number[0].innerText = inputValue;
    number[1].innerText = inputValue;
    plusieurs[2].innerText= '';
    minusOne[0].innerHTML = inputValue - 1;
    magasin.innerText = "Bois en une et au suivant ! ";
    
  } else if (inputValue == valueMin) {
    number[0].innerText = "Plus de ";
    number[1].innerText = "Plus de ";
    minusOne[0].innerHTML = 99;
    magasin.innerText = "Vas au supermarché pour en acheter, ";
  
  } else {
    number[0].innerText = inputValue;
    number[1].innerText = inputValue;
    minusOne[0].innerHTML = inputValue - 1;
    magasin.innerText = "Bois en une et au suivant ! ";
  }
}