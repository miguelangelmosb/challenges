let sumaFinal = 0;

for (let i = 1; i <= 10; i++)
{
    let numero = parseInt(prompt('Ingresa un numero: '));
    alert (`Ingresaste el numero ${numero}`);
    console.log (`Ingresaste el numero ${numero}`)
    sumaFinal += numero;  
}

alert(`La suma final de lo numeros ingresados son: ${sumaFinal}`);
console.log(`La suma final de lo numeros ingresados son: ${sumaFinal}`)