let hora = Math.round(Math.random()*24)
let minutos = Math.round(Math.random()*59)
const horaF = `${hora}:${minutos}`;
let precio = '';

if (hora >= 7 && hora <= 9)
{
    precio = '$1.700';
}

else if (hora >= 12 && hora <= 14)
{
    precio = '1.500';
}

else if (hora >= 18 && hora <= 20)
{
    precio = '$2.000';
}

else 
{
    precio = '$1.000';
}

const mensaje = `Bienvienido\n Son las:  ${horaF} , en la presente hora el pasaje esta en: ${precio}`

alert (mensaje)