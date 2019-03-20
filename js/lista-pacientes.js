let btnBuscar = document.querySelector("#buscar-paciente");
btnBuscar.addEventListener('click',function(){

	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			xhr.addEventListener("load",function(){
				var resposta = xhr.responseText;
				var pacientes = JSON.parse(resposta);

				pacientes.forEach(function(paciente){
					adicionaPacienteAjax(paciente);
				})
			});
		}
		if(this.readyState  < 4){
			document.querySelector(".readstate-ajax").style.display = "inline-block";
		}else{
			document.querySelector(".readstate-ajax").style.display = "none";
		}
	}

	xhr.open("POST","http://localhost/introducao-javascript/introducao-javascript/js/paciente.txt");
	xhr.setRequestHeader("Content-type", 'text/plain', 'charset=UTF-8');
	xhr.send();
})