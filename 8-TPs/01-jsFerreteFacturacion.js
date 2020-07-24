/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/


function Sumar () 
{
var precio1;
var precio2;
var precio3;
var sumar;

precio1=txtIdPrecioUno.value;
precio1=parseInt(precio1);

precio2=txtIdPrecioDos.value;
precio2=parseInt(precio2);

precio3=txtIdPrecioTres.value;
precio3=parseInt(precio3);

sumar = precio1+precio2+precio3;
alert("La suma es: "+sumar);	
}
function Promedio () 
{
 var precio1;
var precio2;
var precio3;
var sumar
var promedio;

precio1=txtIdPrecioUno.value;
precio1=parseInt(precio1);

precio2=txtIdPrecioDos.value;
precio2=parseInt(precio2);

precio3=txtIdPrecioTres.value;
precio3=parseInt(precio3);
    sumar=precio1+precio2+precio3;
	promedio=(sumar/3);
	alert("El promedio es : "+promedio);
}
function PrecioFinal () 
{
	var precio1;
var precio2;
var precio3;
var sumar
var precioFinal;

precio1=txtIdPrecioUno.value;
precio1=parseInt(precio1);

precio2=txtIdPrecioDos.value;
precio2=parseInt(precio2);

precio3=txtIdPrecioTres.value;
precio3=parseInt(precio3);
    
    sumar=precio1+precio2+precio3;
	precioFinal=1.21*(sumar);
	alert("El precio final es: "+ precioFinal);
}

