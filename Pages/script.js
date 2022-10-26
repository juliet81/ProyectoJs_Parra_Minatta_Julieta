let producto = "";
let precio = 0;
let stockAlfajoresCoco = 36;
let stockAlfajoresChoco = 36;
let stockAlfajoresNuez = 48;
let descuento = 0;
let descuentoTotal = 0;


do {
  product = Number(prompt("¿Que producto desea? 1- Alfajores de Coco 2-Alfajores de Choco 3-Alfajores de Nuez 4-Salir"));

} while (product < 1 || product > 4); // vuelve a pedir una opcion mientras el numero elegido sea menor a 1 o mayor a 4

mostrarProductos(product);

function mostrarProductos(product) {
  switch (product) {
    case 1:

      precio = 300;
      descuento = (precio * 30) / 100;
      descuentoTotal = precio - descuento;
      alert("el precio del Alfajor de coco es de $ " + precio + " aplicando el descuento del 30%, te queda en $ " + descuentoTotal);
      cantidad = Number(prompt("cuántas unidades desea"));

      if (product && cantidad <= stockAlfajoresCoco) {
        stockAlfajoresCoco = stockAlfajoresCoco - cantidad;
        alert('Se agregaron ' + cantidad + ' alfajores de Coco al carrito. El total es $ ' + descuentoTotal * cantidad);
      } else if (product && cantidad > stockAlfajoresCoco) {
        alert("Se ha agotado el stock");
      }

      break;


    case 2:
      precio = 150;
      descuento = (precio * 20) / 100;
      descuentoTotal = precio - descuento;
      alert("el precio del Alfajor de Choco es de $ " + precio + " aplicando el descuento del 30%, te queda en $ " + descuentoTotal);
      cantidad = Number(prompt("cuántas unidades desea"));

      if (product && cantidad <= stockAlfajoresChoco) {
        stockAlfajoresChoco = stockAlfajoresChoco - cantidad;
        alert('Se agregaron ' + cantidad + ' alfajores de Choco al carrito. El total es $ ' + descuentoTotal * cantidad);

      } else if (product && cantidad > stockAlfajoresChoco) {
        alert("Se ha agotado el stock");
      }

      break;

    case 3:
      precio = 150;
      descuento = (precio * 20) / 100;
      descuentoTotal = precio - descuento;
      alert("el precio del Alfajor de Nuez es de $ " + precio + " aplicando el descuento del 30%, te queda en $ " + descuentoTotal);
      cantidad = Number(prompt("cuántas unidades desea"));

      if (product && cantidad <= stockAlfajoresNuez) {
        stockAlfajoresNuez = stockAlfajoresNuez - cantidad;
        alert('Se agregaron ' + cantidad + ' alfajores de Nuez al carrito. El total es $ ' + descuentoTotal * cantidad);

      } else if (product && cantidad > stockAlfajoresNuez) {
        alert("Se ha agotado el stock");  
      }
      break;

    default:
      alert("Usted no ha ingresado ningún producto!!");

  }
}