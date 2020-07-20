/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{  
   var numUno;
   var numDos;
   var resul;

   numUno =txtIdNumeroUno.value;
   numUno=parseInt(numUno);
   numDos =txtIdNumeroDos.value;
   numDos=parseInt(numDos);
   resul= numUno + numDos;

	alert("El resultado es: "+resul);
}

