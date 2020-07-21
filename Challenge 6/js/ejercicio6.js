    function diasM (dias= '')
    {
        let resultado = '';

        if ( dias == 'lunes')
        {
            resultado = 'Es lunes, empieza la semana con la mejor actitud.';
        }

        else if ( dias == 'martes')
        {
        resultado= 'Es martes, cada martes es una nueva oportunidad para conseguir un nuevo logro.';
        }

        else if ( dias == 'miercoles')
        {
        resultado= 'Es miercoles, Miercoles empieza con "M" de Maravilloso, como todo lo que te espera hoy';
        }

        else if ( dias == 'jueves')
        {
        resultado= 'Hoy es jueves de recibir buenas noticias y alegrar el corazón.';
        }

        else if ( dias == 'viernes')
        {
        resultado= 'Celebra!! Todo porque hoy es VIERNES!!';
        }

        else if ( dias == 'sabado')
        {
            resultado= 'Buenos dias, ¡El sabado ya esta aqui!';
        }

        else if ( dias == 'domingo')
        {
            resultado= 'Toma tu vida en tus propias manos y haz de este domingo un día grandioso.';
        }

        else
        {
            resultado = 'Datos incorrectos';
        }

        return resultado;
    }
let dias = prompt('Digita un dia de la semana (todo en minuscula): ')
const respuesta = diasM(dias)
alert (respuesta)