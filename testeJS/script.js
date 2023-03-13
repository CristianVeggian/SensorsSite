function addCard() {
  var nome = document.getElementById("nome-card").value;
  var divNova = document.createElement("div");
  divNova.classList.add('card');
  var text = document.createTextNode(nome);
  divNova.appendChild(text);

  var divAtual = document.getElementById("card-viewer");
  divAtual.appendChild(divNova);
}