/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en
 Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit
 (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () {
var temperatura;
var centígrados;

var temperatura=txtIdTemperatura.value;
var temperatura=parseInt(temperatura);	

centigrados=(temperatura-32)*5/9;
alert( temperatura + " grados Fahrenheit son " + centigrados.toFixed(2) + " grados centigrados");
}
function CentigradosFahrenheit () 
{
	var temperatura;
    var Fahrenheit;

    var temperatura=txtIdTemperatura.value;
    var temperatura=parseInt(temperatura);

    Fahrenheit=(temperatura*9/5)+32;
    
    alert( temperatura + " grados centígrados son " + Fahrenheit.toFixed(2) + " grados Fahrenheit");

}
