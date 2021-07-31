//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado (ladoCuadrado) {
    return ladoCuadrado * 4;
}

function areaCuadrado (ladoCuadrado) {
    return ladoCuadrado ** 2;
} 

console.groupEnd();

//Código del triángulo
console.group("Triángulos");


function perimetroTriangulo(ladoTriangulo, baseTriangulo) {
    return ((ladoTriangulo * 2) + baseTriangulo);
} 

function alturaTrianguloIsosceles(ladoTriangulo, baseTriangulo) {
    return ((ladoTriangulo ** 2) - ((baseTriangulo/2)**2)) ** 0.5;
} 

function areaTriangulo(baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo) / 2;
} 

console.groupEnd();

//Código del circulo
console.group("Círculos");


//Diametro

function diametroCirculo(radioCirculo) {
    return radioCirculo * 2;
}

//Pi
const pi = Math.PI;

//Circunferencia
function circunferenciaCirculo(radioCirculo) {
    const diametro = diametroCirculo(radioCirculo);
    return pi * diametro;
}

//Área
function areaCirculo(radioCirculo) {
    return pi * (radioCirculo**2);
}

console.groupEnd();

//Aquí interactuamos con el HTML

//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//Triángulo
function calcularPerimetroTriangulo() {
    const inputLado = document.getElementById("InputLadoTriangulo");
    const valueLado = Number(inputLado.value);
    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueBase = Number(inputBase.value);
    const perimetro = perimetroTriangulo(valueLado, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputLado = document.getElementById("InputLadoTriangulo");
    const valueLado = Number(inputLado.value);
    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueBase = Number(inputBase.value);
    const altura = alturaTrianguloIsosceles(valueLado, valueBase);
    const area = areaTriangulo(valueBase, altura);
    alert(area);
}

//Círculo

function calcularDiametroCirculo() {
    const inputRadio = document.getElementById("InputRadioCirculo");
    const valueRadio = inputRadio.value;
    const diametro = diametroCirculo(valueRadio);
    alert(diametro)
}

function calcularCircunferenciaCirculo() {
    const inputRadio = document.getElementById("InputRadioCirculo");
    const valueRadio = inputRadio.value;
    const circunferencia = circunferenciaCirculo(valueRadio);
    alert(circunferencia)
}

function calcularAreaCirculo() {
    const inputRadio = document.getElementById("InputRadioCirculo");
    const valueRadio = inputRadio.value;
    const area = areaCirculo(valueRadio);
    alert(area);
}

