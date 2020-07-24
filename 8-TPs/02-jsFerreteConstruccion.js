/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un
 terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y
 se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/


function Rectangulo () {
var largo;
var ancho;
var Rectangulo;

largo=txtIdLargo.value;
largo=parseInt(largo);

ancho=txtIdAncho.value;
ancho=parseInt(ancho);

radio=txtIdRadio.value;
radio=parseInt(radio);

Rectangulo=6*(largo+ancho);
alert("Se necesitara " + Rectangulo + "mts. de alambre");
}

function Circulo () {
var radio;
var circulo;

radio=txtIdRadio.value;
radio=parseInt(radio);	

circulo=18.84*radio;

alert("Se necesitara " + circulo + "mts. de alambre");
}

function Materiales () {
var largo;
var ancho;
var cemento;
var cal;

largo=txtIdLargo.value;
largo=parseInt(largo);

ancho=txtIdAncho.value;
ancho=parseInt(ancho);

cemento=(largo*ancho)*2;
cal=(largo*ancho)*3;

alert("Se necesitara de: \r cemento: " + cemento +" bolsas"+ "\r cal: " + cal+" bolsas");
}

