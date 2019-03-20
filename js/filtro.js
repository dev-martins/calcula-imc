
let nome = document.querySelector(".m-filtro-nome");
nome.addEventListener('input',filtro);

function filtro(){

	let campo = this.value;
	let linhasTable = document.querySelectorAll(".paciente");


	for(var i = 0; i < linhasTable.length; i++){

		var linhas = linhasTable[i].querySelector(".info-nome").textContent;
		var e = new RegExp(campo,'i');

		if(!e.test(linhas)){
			
			linhasTable[i].style.display = "none";
		}else{
			linhasTable[i].style.display = "table-row";
		}
	}
}