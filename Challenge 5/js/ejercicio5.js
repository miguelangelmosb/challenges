const calculadora = function (valor = 0, valor2 = 0, valor3 = '')
    {
        let texto = `Tu operacion es: `;
           
        switch(valor3)
        {
            case 'suma': texto += `${valor} + ${valor2} = ${valor + valor2}`;
            break;
            
            case 'resta': texto += `${valor} - ${valor2} = ${valor - valor2}`;
            break;
            
            case 'multiplicacion': texto += `${valor} * ${valor2} = ${valor * valor2}`;
            break;

            case 'division': texto += `${valor} / ${valor2} = ${valor / valor2}`;
            break;

            default: texto = 'Los  valores ingresados no son correctos'; 
        }
   
        return texto;
    }   

valor = parseInt(prompt('Ingresa un numero: '));
valor2 = parseInt(prompt('Ingresa el segundo numero: '));
valor3 =  prompt ('Ingresa la operacion que deseas ingresar (todo en minuscula): ');

const respuesta = calculadora (valor,valor2, valor3)
console.log(respuesta);