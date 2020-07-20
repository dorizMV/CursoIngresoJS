/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numUno;
	var numDos;
	var resul;

	 numUno = txtIdNumeroUno.value;
	 numUno = parseInt(numUno);
	 numDos = txtIdNumeroDos.value;
     numDos = parseInt(numDos);
     resul = numUno+numDos;
     alert("La Suma es: "+resul);	
}

function restar()
{   var numUno;
	var numDos;
	var resul;

	 numUno = txtIdNumeroUno.value;
	 numUno = parseInt(numUno);
	 numDos = txtIdNumeroDos.value;
     numDos = parseInt(numDos);
     resul = numUno-numDos
     alert("La Resta es: "+resul);
	
}

function multiplicar()
{ var numUno;
	var numDos;
	var resul;

	numUno = txtIdNumeroUno.value;
	numUno = parseInt(numUno);
	numDos = txtIdNumeroDos.value;
    numDos = parseInt(numDos);
    resul = numUno*numDos;
    alert("La Multiplicacion es: "+resul);
	
}

function dividir()
{var numUno;
	var numDos;
	var resul;

	var numUno = txtIdNumeroUno.value;
	var numUno = parseInt(numUno);
	var numDos = txtIdNumeroDos.value;
    var numDos = parseInt(numDos);
	resul = numUno/numDos;
	alert("La Division es: "+resul);
}
//txtIdNumeroUno  txtIdNumeroDos
