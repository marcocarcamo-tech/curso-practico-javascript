//Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado mide ${perimetroCuadrado} cm`)

const areaCuadrada = ladoCuadrado ** 2;
console.log(`El área del cuadrado mide ${areaCuadrada} cm^2`)
console.groupEnd();

//Código del triángulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(`Los lados del triángulo miden ${ladoTriangulo1} cm ${ladoTriangulo2} cm ${baseTriangulo} cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo mide ${perimetroTriangulo} cm`)

const alturaTriangulo = ((ladoTriangulo1 ** 2) - ((baseTriangulo/2)**2)) ** 0.5;
console.log(`La altura del triángulo mide ${alturaTriangulo} cm`)

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo mide ${areaTriangulo} cm^2`)
console.groupEnd();

//Código del circulo
console.group("Círculos");

//Radio
const radioCirculo = 4;
console.log(`EL radio del círculo mide ${radioCirculo}`)

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log(`EL diámetro del círculo mide ${diametroCirculo}`)
//Pi
const pi = 3.1415;

//Circunferencia
const circunferencia = pi * diametroCirculo;
console.log(`La circunferencia del círculo mide ${circunferencia}`)
//Área
const areaCirculo = pi * (radioCirculo**2);
console.log(`El área del círculo mide ${areaCirculo}`)
console.groupEnd();