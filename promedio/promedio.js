//function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //   sumaLista = sumaLista + lista[i];
    // }

    /* const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
} */

function calcularpromedio(promedio1, promedio2, promedio3, ) {
    const promedio = (parseFloat(promedio1) + parseFloat(promedio2) + parseFloat(promedio3))/3;
    return promedio;
}
function onclickbuttoncalc() {
    const promedio1 = document.getElementById("promedio1");
    const total1 = promedio1.value;
    const promedio2 = document.getElementById("promedio2");
    const total2 = promedio2.value;
    const promedio3 = document.getElementById("promedio3");
    const total3 = promedio3.value;

    const promedio = calcularpromedio(total1, total2, total3);

    const preciofinal = document.getElementById("resultado"); 

    preciofinal.innerText = "El promedio de las notas es: "+promedio;

}





