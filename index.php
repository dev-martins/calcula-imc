<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<title>Calculo de IMC</title>
		<link rel="icon" href="favicon.png" type="image/x-icon">
		<link rel="stylesheet" type="text/css" href="css/reset.css">
		<link rel="stylesheet" type="text/css" href="css/index.css">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">

	</head>
	<body>

		<header class="cabecalho">
			<nav class="navbar navbar-dark bg-dark">
				<div class="container">
			  		<a class="navbar-brand" href="#">Calculo de IMC</a>
				</div>
			</nav>
		</header>
		<section class="container">     
			<h2 id="titulo-form">Adicionar novo paciente</h2>     
			<form class="registro">
				<div class="row">
					<div class="form-group col-md-12 valores">             
						<label for="nome">Nome:</label>             
						<input class="form-control" id="nome" name="nome" type="text" placeholder="digite o nome" class="campo"/>       
					</div>         
				</div> 
				<div class="row">
					<div class="form-group col valores">             
						<label for="peso">Peso:</label>             
						<input class="form-control" id="peso" name="peso" type="text" placeholder="digite o peso" class="campo campo-medio"/>        
					</div>         
					<div class="form-group col valores">             
						<label for="altura">Altura:</label>             
						<input class="form-control" id="altura" name="altura" type="text" placeholder="digite a altura" class="campo campo-medio" data-mask="9.99"/>       
					</div> 
	        		<div class="form-group col valores">             
	        			<label for="gordura">% de Gordura:</label>             
	        			<input class="form-control" id="gordura" type="text" placeholder="digite a porcentagem de gordura" class="campo campo-medio"/>        
	        		</div> 
				</div>        
        		<button type="button" id="adicionar-paciente" class="btn btn-primary btn-sm">Adicionar <i class="fa fa-plus"></i></button>
    		</form> 
    	</section>
		<main>
			<section class="container">
				<div class="row">
					<div class="col-md-6">
						<h2 class="h3 titulo-table">Meus pacientes</h2>
					</div>
					<div class="col-md-2">
						<img class="readstate-ajax" src="img/loading.gif" style="display:none;" />
						<button type="button" id="buscar-paciente" class="btn btn-secondary float-right">Buscar <i class="fas fa-file-import"></i></button>
					</div>
					<div class="form-group col-md-4">
						<label class="sr-only" for="m-filtro-nome">Filtrar paciente por nome</label>
					    <div class="input-group mb-2">
					        <div class="input-group-prepend">
					          <div class="input-group-text"><i class="material-icons">assignment_ind</i></div>
					        </div>
					        <input type="text" class="form-control m-filtro-nome" id="m-filtro-nome" placeholder="Filtrar paciente por nome">
					    </div>                                
					</div>         
				</div> 
				<div class="table-reponsive">
					<table class="table table-dark">
						<caption>Lista de Clientes</caption>
						<thead>
							<tr>
								<th>Nome</th>
								<th>Peso(kg)</th>
								<th>Altura(m)</th>
								<th>Gordura Corporal(%)</th>
								<th>IMC</th>
							</tr>
						</thead>
						<tbody id="tabela-pacientes">
							<!-- por segurança não remova esse código -->
						</tbody>
					</table>
				</div>

			</section>
		</main>
		<script src="js/calculaImc.js"></script>
		<script src="js/validaCampos.js"></script>
		<script src="js/removeCadastro.js"></script>
		<script src="js/filtro.js"></script>
		<script type="text/javascript" charset="UTF-8" src="js/lista-pacientes.js"></script>
		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
		<script>
			$(function () {
			  $('[data-toggle="tooltip"]').tooltip();
			})
		</script>
		<script src="js/excel.js"></script>
	</body>
</html>
