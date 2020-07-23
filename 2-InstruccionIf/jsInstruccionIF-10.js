function mostrar()
{
	var numeroRandom;
	numeroRandom=Math.floor(Math.random()*10)+1;
    console.log(numeroRandom);
    
	if(numeroRandom>8){
		alert("Excelente " + numeroRandom);
	}
	else{
       if(numeroRandom<4){
       	alert("Vamos, la proxima se puede " + numeroRandom);
       }
       else{
       	alert("APROBÓ " + numeroRandom);
       }
	}
}//FIN DE LA FUNCIÓN




