/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{ 

	var person = prompt("Please enter your name", "Harry Potter"); //ingresa el dato 
	alert("Su nombre ingresado es: "+ person); //muestra el dato ingresado en otra venTana 

}

/* Se pide un importe(ej:200) y un porcetaje de descuento(ej:30 ) por prompt, 
y se muestra el importe con el descuento por alert con el siguiente mensaje :
" el importe es $xxxx el descuento es $xxx y el precio final es $xxx, gracias por su compra"
ejemplo:
" el importe es $200 el descuento es $60 y el precio final es $140, gracias por su compra" 
(ingresando 200 para el importe y 30 para el porcetaje de descuento)

function mostrar(){
var importe 
var dscto
var dscto1
var final

importe = prompt("Ingrese un importe", 200);
importe = parseInt(importe);
dscto = prompt("Ingresa Descuento",40);
dscto = parseInt(dscto);
dscto1 = (dscto/100)*importe;
final = ((100-dscto)/100)*importe;
alert("El importe es $"+ importe + " el descuento es $"+ dscto1 +" y el precio final es $"+final+",\rGracias por su compra");

}*/
