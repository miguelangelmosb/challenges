function diasM (dias= '')
{
    let resultado = '';

    switch(dias)
    {
        case 'lunes': resultado = 'Es lunes, empieza la semana con la mejor actitud.';
        break;

        case 'martes': resultado = 'Es martes, cada martes es una nueva oportunidad para conseguir un nuevo logro.';
        break;

        case 'miercoles': resultado = 'Es miercoles, Miercoles empieza con "M" de Maravilloso, como todo lo que te espera hoy';
        break;

        case 'jueves': resultado= 'Hoy es jueves de recibir buenas noticias y alegrar el corazón.'; 
        break;

        case 'viernes': resultado= 'Celebra!! Todo porque hoy es VIERNES!!';
        break;
        
        case 'sabado': resultado= 'Buenos dias, ¡El sabado ya esta aqui!';
        break;

        case 'domingo': resultado= 'Toma tu vida en tus propias manos y haz de este domingo un día grandioso.'; 
        break;

        default: resultado = 'Datos incorrectos';
        break;
    }

    return resultado;
}
let dias = prompt('Digita un dia de la semana (todo en minuscula): ')
const respuesta = diasM(dias)
alert (respuesta)