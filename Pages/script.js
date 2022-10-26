let producto = "";
 let precio = 0;
 let stockAlfajoresCoco = 36;
 let stockAlfajoresChoco = 36;
 let stockAlfajoresNuez = 48;
 let descuento = 0;
 let descuentoTotal = 0;
do{
  producto = Number(prompt("¿Que producto desea? 1- Alfajores de Coco 2-Alfajores de Choco 3-Alfajores de Nuez 4-Salir"));

}while(producto < 1 || producto > 4); // vuelve a repetir la linea 9 mientras el numero elegido sea menor a 1 o mayor a 4
   
 function mostrarProductos(product){
    switch(product){
        case 1 :
            
            precio = 300;
            descuento = (precio*30)/100;
            descuentoTotal = precio - descuento;
            alert("el precio del Alfajor de coco es de $ " + precio + " " + "aplicando el descuento del 30%, te queda en $ " + descuentoTotal);
            cantidad = Number(prompt("cuántas unidades desea"));
            
            if(product && cantidad <= stockAlfajoresCoco){
                alert("Su producto ha sido agregado al carrito");
                stockAlfajoresCoco = stockAlfajoresCoco-cantidad;
                
            }else if(product && cantidad > stockAlfajoresCoco){
                alert("Se ha agotado el stock");
            }      

          break;         
          
        
        case 2: 
            precio = 150;
            descuento = (precio*20)/100;
            descuentoTotal = precio - descuento;
                alert("el precio del Alfajor de Choco es de $ " + precio + " " + "aplicando el descuento del 30%, te quedn en $ " + descuentoTotal);
            cantidad = Number(prompt("cuántas unidades desea"));
            if(product && cantidad <= stockAlfajoresChoco){
                alert("Su producto ha sido agregado al carrito");
                stockIpad = stockIpad-cantidad;  
            }else if(product && cantidad > stockAlfajoresChoco){
                alert("Se ha agotado el stock")    
            }

        break; 

   case 3: 
   precio = 150;
          descuento = (precio*20)/100;
          descuentoTotal = precio - descuento;
            alert("el precio del Alfajor de Nuez es de $ " + precio + " " + "aplicando el descuento del 30%, te queda en $ " + descuentoTotal);
          cantidad = Number(prompt("cuántas unidades desea"));
          if(product && cantidad <= stockIpad){
            alert("Su producto ha sido agregado al carrito");
            stockAlfajoresChoco = stockAlfajoresChoco-cantidad;
           }else if(product && cantidad > stockIpad){
            alert("Se ha agotado el stock")
            
            break;
  
          }default: 
          alert("Usted no ha ingresado ningún producto!!")
          
    }
  } 
  mostrarProductos(producto);
    //stock de productos
  console.log(stockAlfajoresCoco);
  console.log(stockAlfajoresChoco);
  console.log(stockAlfajoresNuez);