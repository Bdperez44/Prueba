//codigo cuadrado
//perimetroCuadrado(5);
//const ladoCuadrado = 5;
//console.log("Los lados del //cuadrado miden: "+ladoCuadrado+" cm.");

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perimetro del cuadrado es: "+perimetroCuadrado+" cm.");

function perimetroCuadrado(lado){
    return lado * 4;
}


//HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);

    const perimetrocuaresultado = document.getElementById("perimetrocuaresultado"); 

    perimetrocuaresultado.innerText = "El petrimetro del cuadrado es: "+perimetro +" cm";
}

function areaCuadrado(lado){
    return lado * lado;
}


//HTML
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);

    const areacuaresultado = document.getElementById("areacuaresultado"); 

    areacuaresultado.innerText = "El area del cuadrado es: "+area +" cm";
}


//area circulo
function areaCirculo(radio){
    return 3.14 * radio * radio;
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    
    const area = areaCirculo(value);

    const areacirresultado = document.getElementById("areacirresultado"); 

    areacirresultado.innerText = "El area del circulo es: "+area +" cm";
}

//perimetro circulo

function perimetroCirculo(radio){
    return 2 * 3.14 * radio;
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    
    const perimetro = perimetroCirculo(value);

    const perimetrocirresultado = document.getElementById("perimetrocirresultado"); 

    perimetrocirresultado.innerText = "El perimetro del circulo es: "+perimetro +" cm";
}

//area triangulo

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function calcularAreaTriangulo() {
    const ba = document.getElementById("base");
    const base = ba.value;

    const alt = document.getElementById("altura");
    const altura = alt.value;
    
    const area = areaTriangulo(base, altura);

    const areatriresultado = document.getElementById("areatriresultado"); 

    areatriresultado.innerText = "El area del triangulo es: "+area +" cm";
}

//perimetro triangulo
function perimetroTriangulo(lado1, lado2, lado3){
    return parseFloat(lado1)+parseFloat(lado2)+parseFloat(lado3);
}

function calcularPerimetroTriangulo() {
    const la1 = document.getElementById("lado1");
    const lado1 = la1.value;

    const la2 = document.getElementById("lado2");
    const lado2 = la2.value;

    const la3 = document.getElementById("lado3");
    const lado3 = la3.value;
    
    const perimetro = perimetroTriangulo(lado1, lado2, lado3);

    const perimetrotriresult = document.getElementById("perimetrotriresultado"); 

    perimetrotriresult.innerText = "El perimetro del triangulo es: "+perimetro +" cm";
}

