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
var precioDscto;
var marcas;
var precioBruto;
var dscto
var impuesto;
var importeFinal;

lamparas=txtIdCantidad.value;
lamparas=parseInt(lamparas);
precioDscto=txtIdprecioDescuento.value; //precio cn descuento
marcas= marca.value; 

precioBruto=lamparas*35

if(lamparas>5){
	dscto=50
	precioDscto=precioBruto-(dscto*precioBruto)/100;
        if(precioDscto>119 ){        
     	   impuesto=0.1*precioBruto;        
     	   importeFinal=precioDscto+impuesto;        //txtIdprecioDescuento.value=importeFinal.toFixed(2);
           alert("Usted pago "+ impuesto + " de IIBB" + "\rSiendo el Importe a pagar: "+ importeFinal + " pesos");
        }
        else{
           alert("El dscto es de: "+ dscto + "%\r"+ "El importe a pagar es: "+ precioDscto + " pesos");	
        }
}
else{
      if(lamparas==5 ){ 
            	if(marcas=="ArgentinaLuz"){            		
                 dscto=40;
                 precioDscto=precioBruto-(dscto*precioBruto)/100;                	
     	          alert("El dscto es de: "+ dscto + "%\r"+ "El importe a pagar es: "+ precioDscto + " pesos");
                 }
                 else{
        	        dscto=30;  
        	        precioDscto=precioBruto-(dscto*precioBruto)/100;     	     	       
     	            alert("El dscto es de: "+ dscto + "%\r"+ "El importe a pagar es: "+ precioDscto + " pesos");
                 }
            }
            else{
                if(lamparas==4){                	
                        if(marcas=="FelipeLamparas" || marcas=="ArgentinaLuz"){
     	                dscto=25; 
     	                precioDscto=precioBruto-(dscto*precioBruto)/100;   	                
     	                alert("El dscto es de: "+ dscto + "%\r"+ "El importe a pagar es: "+ precioDscto + " pesos");
                        }
                        else{
                        	dscto=20;
                        	precioDscto=precioBruto-(dscto*precioBruto)/100;
                        	alert("El dscto es de: "+ dscto + "%\r"+ "El importe a pagar es: "+ precioDscto + " pesos");
                        }
                }
                else{
                    if(lamparas==3){                    	
                            if(marcas=="ArgentinaLuz"){
    	                      dscto=15;
    	                      precioDscto=precioBruto-(dscto*precioBruto)/100;
     	                      alert("El dscto es de: "+ dscto + "%\r"+ "El importe a pagar es: "+ precioDscto + " pesos");
     	                    }
     	                    else{
     		                    if(marcas=="FelipeLamparas"){
     			                       dscto=10;
     			                       precioDscto=precioBruto-(dscto*precioBruto)/100;
     			                       alert("El dscto es de: "+ dscto + "%\r"+ "El importe a pagar es: "+ precioDscto + " pesos");
     		                    }
     		                    else{
     			                     dscto=5; 
     			                     precioDscto=precioBruto-(dscto*precioBruto)/100;			                     
     	                             alert("El dscto es de: "+ dscto + "%\r"+ "El importe a pagar es: "+ precioDscto + " pesos");
     		                    }
     	                    }
                    }
                    else{
            	         precioBruto;
     	                 alert("El importe a pagar es: "+ precioBruto + " pesos");
                    }
                }
            }
}
}
