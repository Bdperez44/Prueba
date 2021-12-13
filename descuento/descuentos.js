function calcularpreciocondescuento(precio, descuento) {
    const porcentajepreciocondescuento = 100 - descuento;
    const preciocondescuento = (precio * porcentajepreciocondescuento)/100;
    return preciocondescuento;
}
function onclickbuttonpricediscount() {
    const inputprice = document.getElementById("precio");
    const pricevalue = inputprice.value;
    const inputdescuento = document.getElementById("descuento");
    const pricedescuentovalue = inputdescuento.value;

    const preciocondescuento = calcularpreciocondescuento(pricevalue, pricedescuentovalue);

    const preciofinal = document.getElementById("preciofinal"); 

    preciofinal.innerText = "El total a pagar es: $"+preciocondescuento;

}