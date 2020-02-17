


/*=============================================
EDITAR MATERIA
=============================================*/

$(".btnEditarmateria").click(function(){
    
	var idmateria = $(this).attr("idmateria");
	console.log("idmateria:",idmateria);
	var datos = new FormData();
	datos.append("idmateria", idmateria);
	
	$.ajax({

		url:"ajax/materia.ajax.php",
		method: "POST",
		data: datos,
		cache: false,
		contentType: false,
		processData: false,
		dataType: "json",
		success: function(respuesta){

			console.log("respuestas ",respuesta);


            $("#editarnombrem").val(respuesta["nombre_m"]);
			$("#editarsigla").val(respuesta["sigla"]);
			$("#editarfolio").val(respuesta["folio"]);
			$("#editarlibro").val(respuesta["libro"]);
			$("#editargestion").val(respuesta["gestion"]);
            $("#editarestapa").html(respuesta["fecha_curso"]);
            $("#editarestapa").val(respuesta["fecha_curso"]);
            $("#editardocente").val(respuesta["docente"]);
            
            
		}

	});

})

/*=============================================
ELIMINAR MATERIA
=============================================*/

$(".btnEliminarmateria").click(function(){
	
    var idmateria = $(this).attr("idmateria");
    var materia = $(this).attr("materia");
  
    swal({
      title: '¿Está seguro de borrar el materia?',
      text: "¡Si no lo está puede cancelar la accíón!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, borrar materia!'
    }).then((result)=>{
  
      if(result.value){
  
        window.location = "index.php?ruta=materia&idmateria="+idmateria+"&materia="+materia;
  
      }
  
    })
  
  })
  
