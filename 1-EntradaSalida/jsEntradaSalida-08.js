/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numUno;
	var numDos;
	var resto;
	numUno=txtIdNumeroDividendo.value;
	numUno=parseInt(numUno);
	numDos=txtIdNumeroDivisor.value;
	numDos=parseInt(numDos);
	resto=numUno%numDos
	alert("El resto es: "+resto)
}
