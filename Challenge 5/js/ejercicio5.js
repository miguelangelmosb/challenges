const calculadora = function (valor = 0, valor2 = 0, valor3 = '')
    {
        let texto = `Tu operacion es: `;
           
        if(valor3 == 'suma')
            {
                texto += `${valor} + ${valor2} = ${valor + valor2}`;
            }
            
        else if(valor3 == 'resta')
            {
                texto += `${valor} - ${valor2} = ${valor - valor2}`;
            }
            
        else if(valor3 == 'multiplicacion')
            {
                texto += `${valor} * ${valor2} = ${valor * valor2}`;
            }
            
        else if(valor > 0 && valor2 > 0 && valor3 == 'division')
            {
                texto += `${valor} / ${valor2} = ${valor / valor2}`;
            }
            
        else 
            {
                texto = 'Los  valores ingresados no son correctos';
            }   
        return texto;
    }   

valor = parseInt(prompt('Ingresa un numero: '));
valor2 = parseInt(prompt('Ingresa el segundo numero: '));
valor3 =  prompt ('Ingresa la operacion que deseas ingresar (todo en minuscula): ');

const respuesta = calculadora (valor,valor2, valor3)
console.log(respuesta);