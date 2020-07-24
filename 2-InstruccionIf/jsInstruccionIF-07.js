function mostrar()
{
	var edad;
	var estado;

	edad=txtIdEdad.value;
	edad=parseInt(edad);
	estado=estadoCivil.value;



	if(edad<18 && (estado != "Soltero")){
         alert("Sos muy pequeño para NO ser soltero \r" + "Respeta a tus mayores");
     }
	   else{
	   	  if(edad<13){
         	alert("Hagan la tarea \r" + "Respeta a tus mayores");
         }      
	}
	if(edad>59){
		alert("Sos persona de riesgo \r" + "Se responsable");
	}else{
      if(edad>17 && estado=="Soltero"){
          alert("A vivir la vida \r" + "Se Responsable"); 
      }
      if(edad>17 && estado=="Casado"){
          alert("A disfrutar de la pareja \r" + "Se responsable");
      }
      if(edad>17 && estado=="Divorciado"){
	      alert("Volve a intentarlo \r" + "Se responsable");
      }
	}
	  }
















/*function mostrar()
{
	var edad;
	var estado;

	edad=txtIdEdad.value;
	edad=parseInt(edad);
	estado=estadoCivil.value;

	if(edad<18 && (estado != "Soltero")){
		alert("Es muy pequeño para NO ser soltero");
	}
}*///FIN DE LA FUNCIÓN