function calcularpreciocondescuento(precio) {
    const porcentajepreciocondescuento = 100 - 30;
    const preciocondescuento = (precio * porcentajepreciocondescuento)/100;
    return preciocondescuento;
}
function calcularpreciocondescuento2(precio) {
    const porcentajepreciocondescuento2 = 100 - 50;
    const preciocondescuento2 = (precio * porcentajepreciocondescuento2)/100;
    return preciocondescuento2;
}
function calcularpreciocondescuento3(precio) {
    const porcentajepreciocondescuento3 = 100 - 80;
    const preciocondescuento3 = (precio * porcentajepreciocondescuento3)/100;
    return preciocondescuento3;
}
function onclickbuttonpricediscount() {
    const inputprice = document.getElementById("precio");
    const pricevalue = inputprice.value;
    const inputdescuento = document.getElementById("descuento");
    const pricedescuentovalue = inputdescuento.value;
    
    if(pricedescuentovalue === "BRAYAN"){

        const preciocondescuento2 = calcularpreciocondescuento2(pricevalue);

        const preciofinal = document.getElementById("preciofinal"); 
    
        preciofinal.innerText = "El cupon es valido y se hara un descuento del 50% total a pagar es: $"+preciocondescuento2;
    }

    else if(pricedescuentovalue === "DAVID"){ 
    const preciocondescuento = calcularpreciocondescuento(pricevalue);

    const preciofinal = document.getElementById("preciofinal"); 

    preciofinal.innerText = "El cupon es valido y se hara un descuento del 30% total a pagar es: $"+preciocondescuento;
}

    else if(pricedescuentovalue === "ADSI"){

        const preciocondescuento3 = calcularpreciocondescuento2(pricevalue);

        const preciofinal = document.getElementById("preciofinal"); 

        preciofinal.innerText = "El cupon es valido y se hara un descuento del 80% total a pagar es: $"+preciocondescuento3;
    }

    else{
    const preciocondescuento = pricevalue;

    const preciofinal = document.getElementById("preciofinal"); 

    preciofinal.innerText = "El cupon es invalido o esta vacio no tendra descuento total a pagar es: $"+preciocondescuento;
    }

}