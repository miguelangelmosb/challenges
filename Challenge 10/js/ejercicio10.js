let pregunta = prompt('¿Que parte del himno deseas escuchar?');
let himno = [`¡Oh gloria inmarcesible!,
¡Oh júbilo inmortal!, 
¡En surcos de Dolores el bien germina ya!\n`,

`¡Cesó la horrible noche!,
La libertad sublime
derrama las auroras
de su invencible luz.
La humanidad entera,
que entre cadenas gime,
comprende las palabras
del que murió en la cruz.\n`,
 
`"¡Independencia!" grita
el mundo americano;
se baña en sangre de héroes
la tierra de Colón.
Pero este gran principio:
"El rey no es soberano",
Resuena, y los que sufren
Bendicen su pasión.\n`,

`Del Orinoco el cauce
se colma de despojos;
de sangre y llanto un río
se mira allí correr.
En Bárbula no saben
las almas ni los ojos,
si admiración o espanto
sentir o padecer.\n`,
 
`A orillas del Caribe
hambriento un pueblo lucha,
horrores prefiriendo
a pérfida salud.
¡Oh, sí! De Cartagena
la abnegación es mucha,
y escombros de la muerte
desprecia su virtud.\n`,

`De Boyacá en los campos
el genio de la gloria
con cada espiga un héroe
invicto coronó.
Soldados sin coraza
ganaron la victoria;
su varonil aliento
de escudo les sirvió.\n`,

`Bolívar cruza el Ande
que riega dos océanos;
espadas cual centellas
fulguran en Junín.
Centauros indomables
descienden a los Llanos,
y empieza a presentirse
de la epopeya el fin.\n`,

`La trompa victoriosa
en Ayacucho truena;
y en cada triunfo crece
su formidable son.
En su expansivo empuje
la libertad se estrena,
del cielo americano
formando un pabellón.\n`,

`La Virgen sus cabellos
arranca en agonía
y de su amor viuda
los cuelga del ciprés.
Lamenta su esperanza
que cubre losa fría,
pero glorioso orgullo
circunda su alba tez.\n`,

`La patria así se forma,
Termópilas brotando;
constelación de cíclopes
su noche iluminó.
La flor estremecida,
mortal el viento hallando,
debajo los laureles
seguridad buscó.\n`,

`Mas no es completa gloria
vencer en la batalla,
que el brazo que combate
lo anima la verdad.
La independencia sola
al gran clamor no acalla;
si el sol alumbra a todos,
justicia es libertad.\n`,

`Del hombre los derechos
Nariño predicando,
el alma de la lucha
Profético enseñó.
Ricaurte en San Mateo
en átomos volando,
"Deber antes que vida",
con llamas escribió.`]

switch (pregunta)
 {
     case 'todo': console.log(`Coro:\n ${himno[0]}\n  I:\n ${himno[1]}\n II:\n ${himno[2]}\n III:\n ${himno[3]}\n IV:\n ${himno[4]}\n V:\n ${himno[5]}\n  VI:\n ${himno[6]}\n VII:\n ${himno[7]}\n VIII:\n ${himno[8]}\n IX:\n ${himno[9]}\n X:\n ${himno[10]}\n XI:\n ${himno[11]}`);
     break;

    case 'coro' : console.log(`Coro:\n ${himno[0]}`);
    break;

    case '1' : console.log(`I:\n ${himno[1]}`);
    break;

    case '2' : console.log(`II:\n ${himno[2]}`);
    break;
    
    case '3' : console.log(`III:\n ${himno[3]}`);
    break;

    case '4' : console.log(`IV:\n ${himno[4]}`);
    break;

    case '5' : console.log(`V:\n ${himno[5]}`);
    break;

    case '6' : console.log(`VI:\n ${himno[6]}`);
    break;

    case '7' : console.log(`VII:\n ${himno[7]}`);
    break;

    case '8' : console.log(`VIII:\n ${himno[8]}`);
    break;

    case '9' : console.log(`IX:\n ${himno[9]}`);
    break;

    case '10' : console.log(`X:\n ${himno[10]}`);
    break;

    case '11' : console.log(`XI:\n ${himno[11]}`);
    break;

    default: console.log('Valor no valido.')
    break;
 }