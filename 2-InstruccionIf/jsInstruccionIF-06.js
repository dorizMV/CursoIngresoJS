function mostrar()
{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if(edad>17){
		alert("Eres Mayor de edad");
	}else{
        if(edad<13){
	       alert("Eres Menor");
        }
        else{
    	alert("Eres Adolescente");
     }
    }

}//FIN DE LA FUNCIÓN

/*function mostrar()
{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if(edad<13){
		alert("Eres Menor");
	}
	else{
		if(edad<18){
			alert("Eres Mayor");
		}
		else{
			alert("Eres Adolescente")
		}
	}
}*/