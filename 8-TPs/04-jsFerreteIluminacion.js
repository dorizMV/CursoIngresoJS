/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y
 si es de otra marca el descuento es del 30%.


C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  
se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{   
var lamparas;
var marcas;
var precioFinal;
var impuesto;
var importeFinal;
lamparas=txtIdCantidad.value;
lamparas=parseInt(lamparas);
marcas= marca.value;

if(lamparas>5){
	precioFinal=0.5*(lamparas*35);
    if(precioFinal>119){
     	impuesto=0.1*(lamparas*35);
        importeFinal=precioFinal+impuesto;
        txtIdprecioDescuento.value=importeFinal.toFixed(2);
        alert("Usted pago "+ impuesto + " de IIBB" + " Siendo el Importe a pagar: "+ importeFinal.toFixed(2) + " pesos");
     }
     else {     	
        precioFinal=0.5*(lamparas*35);
     	txtIdprecioDescuento.value=precioFinal.toFixed(2);
     	alert("El importe a pagar es: "+ precioFinal.toFixed(2) + " pesos");
     }    
}
else{
            if(lamparas==5){
                 if(marcas=="ArgentinaLuz"){
     	           precioFinal=0.6*(lamparas*35);
     	           txtIdprecioDescuento.value=precioFinal.toFixed(2);
     	           alert("El importe a pagar es: "+ precioFinal.toFixed(2) + " pesos");
                 }
                 else{
        	     precioFinal=0.7*(lamparas*35);
     	         txtIdprecioDescuento.value=precioFinal.toFixed(2);
     	         alert("El importe a pagar es: "+ precioFinal.toFixed(2) + " pesos");
                 }
            }
            else{
                if(lamparas==4){
                        if(marcas=="FelipeLamparas" || marcas=="ArgentinaLuz"){
     	                 precioFinal=0.75*(lamparas*35);
     	                 txtIdprecioDescuento.value=precioFinal.toFixed(2);
     	                 alert("El importe a pagar es: "+ precioFinal.toFixed(2) + " pesos");
                        }
                        else{
     	                precioFinal=0.8*(lamparas*35);
     	                txtIdprecioDescuento.value=precioFinal.toFixed(2);
     	                alert("El importe a pagar es: "+ precioFinal.toFixed(2) + " pesos");
                        }
                }
                else{
                    if(lamparas==3){
                            if(marcas=="ArgentinaLuz"){
    	                      precioFinal=0.85*(lamparas*35);
     	                      txtIdprecioDescuento.value=precioFinal.toFixed(2);
     	                      alert("El importe a pagar es: "+ precioFinal.toFixed(2) + " pesos");
     	                    }
     	                    else{
     		                    if(marcas="FelipeLamparas"){
     			                     precioFinal=0.9*(lamparas*35);
     	                             txtIdprecioDescuento.value=precioFinal.toFixed(2);
     	                             alert("El importe a pagar es: "+ precioFinal.toFixed(2) + " pesos");
     		                    }
     		                    else{
     			                     precioFinal=0.95*(lamparas*35);
     	                             txtIdprecioDescuento.value=precioFinal.toFixed(2);
     	                             alert("El importe a pagar es: "+ precioFinal.toFixed(2) + " pesos");
     		                    }
     	                    }
                    }
                    else{
            	         precioFinal=lamparas*35;
     	                 txtIdprecioDescuento.value=precioFinal.toFixed(2);
     	                 alert("El importe a pagar es: "+ precioFinal.toFixed(2) + " pesos");
                    }
                }
            }
}

}