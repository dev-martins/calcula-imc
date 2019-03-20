

let buttonAdd = document.querySelector("#adicionar-paciente");
buttonAdd.addEventListener('click',function(e){e.preventDefault();});

//CALCULA IMC
function calculaIMC(){

	var pacientes = document.querySelectorAll('#tabela-pacientes tr');
	for(let i = 0; i < pacientes.length;i++){

		let peso = pacientes[i].querySelector('#tabela-pacientes tr td:nth-child(2)').textContent;
		let altura = pacientes[i].querySelector('#tabela-pacientes tr td:nth-child(3)').textContent;
		let imc = peso / (altura * altura);

		if(validaIMC(imc) == "normal"){

			pacientes[i].querySelector('#tabela-pacientes tr td:nth-child(5)').textContent = imc.toFixed(2);
			pacientes[i].classList.add("bg-success");
			pacientes[i].querySelector('#tabela-pacientes tr td:nth-child(5)').style.fontWeight = "900";

		}else if(validaIMC(imc) == "acimaPeso"){

			pacientes[i].querySelector('#tabela-pacientes tr td:nth-child(5)').textContent = imc.toFixed(2);
			pacientes[i].classList.add("bg-danger");
			pacientes[i].querySelector('#tabela-pacientes tr td:nth-child(5)').style.fontWeight = "900";

		}else if(validaIMC(imc) == "abaixoPeso"){

			pacientes[i].querySelector('#tabela-pacientes tr td:nth-child(5)').textContent = imc.toFixed(2);
			pacientes[i].classList.add("bg-warning");
			pacientes[i].querySelector('#tabela-pacientes tr td:nth-child(5)').style.fontWeight = "900";
		}
	}
}

function adicionaPaciente(){

	// SELECIONAR VALORES DO FORM
	let paciente = selecionaInputs();
	let table = document.querySelector("#tabela-pacientes");
	let linha = criaTr(paciente);

	// ADICIONAR A NOVA LINHA DENTRO DA TABELA
	table.appendChild(linha);
	// CALCULA O IMC
	calculaIMC();
}

function adicionaPacienteAjax(paciente){
	
	// SELECIONAR VALORES DO DOCUMENTO JSON
	let table = document.querySelector("#tabela-pacientes");
	let linha = criaTr(paciente);

	// ADICIONAR A NOVA LINHA DENTRO DA TABELA
	table.appendChild(linha);
	// CALCULA O IMC
	calculaIMC();
}

function validaPeso(peso){
	if(peso > 0 && peso < 300){
		peso = true;
	}else{
		peso = false;
	}

	return peso;
}

function validaAltura(altura){

	if(altura > 0 && altura < 2.20){
		altura = true;
	}else{
		altura = false;
	}

	return altura;
}

function validaIMC(imc){
	if(imc < 18.5){
		nivelImc = "abaixoPeso";
	}else if(imc >= 18.5 && imc <= 25){
		nivelImc = "normal";
	}else if(imc > 25){
		nivelImc = "acimaPeso";
	}

	return nivelImc;
}

function selecionaInputs(){

// SELECIONAR VALORES DOS CAMPOS
	paciente = {
		nome : document.querySelector("#nome").value,
		peso : document.querySelector("#peso").value,
		altura : document.querySelector("#altura").value,
		gordura : document.querySelector("#gordura").value,
		table : document.querySelector("#tabela-pacientes")
	}
	return paciente;
}

function criaTr(paciente){

	// CRIAR TR's
	let linha = document.createElement("tr");
	// CRIAR TD's
	montaTd(paciente,linha);
	linha.classList.add("paciente");
	return linha;
}

function montaTd(paciente,linha){

	let nomeTd = document.createElement("td");
	let pesoTd = document.createElement("td");
	let alturaTd = document.createElement("td");
	let gorduraTd = document.createElement("td");
	let imcTd = document.createElement("td");

	// COLOCAR OS VALORES DENTRO DAS TD's
	nomeTd.textContent = paciente.nome;
	pesoTd.textContent = paciente.peso;
	alturaTd.textContent = paciente.altura;
	gorduraTd.textContent = paciente.gordura;
	imcTd.textContent = 0;

	// ADICIONA CLASSES NAS TDS
	nomeTd.classList.add('info-nome');
	pesoTd.classList.add('info-peso');
	alturaTd.classList.add('info-altura');
	gorduraTd.classList.add('info-gordura')
	imcTd.classList.add('info-imc');

	// ADICIONAR AS TD's DENTRO DA TR
	linha.appendChild(nomeTd);
	linha.appendChild(pesoTd);
	linha.appendChild(alturaTd);
	linha.appendChild(gorduraTd);
	linha.appendChild(imcTd);

	// ADICIONAR ATRIBUTOS NAS TR's
	linha.setAttribute('data-toggle','tooltip');
	linha.setAttribute('data-placement','top');
	linha.setAttribute('title','Dê click duplo para remover!');
	$(function(){
	  $('[data-toggle="tooltip"]').tooltip();
	})
}