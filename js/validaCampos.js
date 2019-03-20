
buttonAdd.addEventListener('click',validaCampos);

function validaCampos(){

	let form = document.querySelectorAll('.valores');
	let peso = document.querySelector("#peso").value;
	let altura = document.querySelector("#altura").value;
	let campos = [];

	/*
	* verifica se há campos vazios no momento da submissão;
	*/
	selecionaCampos(form,campos);

	if(campos.includes(0)){
		return;
		/* 
		* se não há campos vazios;
		* se peso e altura são válidos;
		*/
	}else{


		if(validaPeso(peso) == false){
			document.querySelector("#peso").value = "Peso Inválido";
			document.querySelector("#peso").style.color = "red";
			document.querySelector("#peso").style.border = "solid red 1px";
			console.log(validaPeso(peso));
		}

		if(validaAltura(altura) == false){
			document.querySelector("#altura").value = "Altura Inválida";
			document.querySelector("#altura").style.color = "red";
			document.querySelector("#altura").style.border = "solid red 1px";
			console.log(validaAltura(altura));
		}


		if(validaPeso(peso) == true && validaAltura(altura) == true){
			adicionaPaciente();
			document.querySelector(".registro").reset();
		}
		
	}

}




function selecionaCampos(form,campos){

	for(var i = 0; i < form.length; i++){
		valor = form[i].querySelector('.valores input').value;

		if(valor == ""){
			form[i].querySelector('.valores input').placeholder = "Campo não pode ficar vazio";
			form[i].querySelector('.valores input').style.border = "solid red 1px";
			campos[i] = 0;
		}else{
			campos[i] = 1;
			form[i].querySelector('.valores input').style.border = "solid #ccc 1px";
		}

	}
}