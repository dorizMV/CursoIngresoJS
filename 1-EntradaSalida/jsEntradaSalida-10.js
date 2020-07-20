/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var dsctoImporte;

	importe=txtIdImporte.value;
	importe=parseInt(importe);

	dsctoImporte=0.75*importe; //el descuento del 25% representa en el 75% del importe
	txtIdResultado.value=dsctoImporte;
}

