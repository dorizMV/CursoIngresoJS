/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var importe;
	var importeAumentado;
	var result;

	importe=txtIdSueldo.value;
	importe=parseInt(importe);

	importeAumentado=1.1*importe;/*al expresar que el aumento es del 10% 
	                             entonces el importe aumentado representa el 110 % del importe*/

    txtIdResultado.value=importeAumentado;
	                             
	//alert("El importe con el 10% de aumento es: "+importeAumentado); 

}
