let validated = false;

function addCard() {
	if(validated){
		document.getElementById("warning").innerHTML = "";
		var nome = document.getElementById("nome-card").value;
		var divNova = document.createElement("div");
		divNova.classList.add('card');
		var text = document.createTextNode(nome);
		divNova.appendChild(text);

		var divAtual = document.getElementById("card-viewer");
		divAtual.appendChild(divNova);
	} else {
		document.getElementById("warning").innerHTML  = "Insira um nome com mais de 6 letras";
	}
}

function valida() {
	
	if (document.getElementById("nome-card").value.length < 6){
		document.getElementById("nome-card").style.backgroundColor = 'red';
		validated = false;
	} else {	
		document.getElementById("nome-card").style.backgroundColor = 'white';
		validated = true;
	}

}