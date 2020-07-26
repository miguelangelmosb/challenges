let array = [5 ,7 ,10 ,12 ,37 ,50 ,22 , 18];
    
console.log(`Viejo Array ${array}`)

array.forEach((element, index) => {
    if (element % 5 === 0) array[index] = element * element;
    else array[index] = element / 2;
});
console.log(`Nuevo Array: ${array}`); 