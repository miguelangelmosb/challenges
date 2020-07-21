const valorPregunta = (nombre) => {
    const inputs = document.querySelectorAll(`input[name="${nombre}"]`);
    let pregunta = '';
    for ( const input of inputs) {
      if(input.checked) {
        pregunta = input.value;
      }
    }
    return pregunta;
  }
  
  const botonClick = () => {
    const pregunta1 = valorPregunta('pregunta1');
    const pregunta2 = valorPregunta('pregunta2');
    const pregunta3 = valorPregunta('pregunta3');
    const pregunta4 = valorPregunta('pregunta4');
    const pregunta5 = valorPregunta('pregunta5');
    const pregunta6 = valorPregunta('pregunta6');
    const pregunta7 = valorPregunta('pregunta7');
    const pregunta8 = valorPregunta('pregunta8');
    const pregunta9 = valorPregunta('pregunta9');
    const pregunta10 = valorPregunta('pregunta10');
    
    
    let si = 0;
    let no = 0;
    resultado = `Resultados: Si: ${si} No: ${no}` 
    
    
    if (pregunta1 == 'si') si += 1;
    if (pregunta1 == 'no') no += 1;
    
    if (pregunta2 == 'si') si += 1;
    if (pregunta2 == 'no') no += 1;
    
    if (pregunta3 == 'si') si += 1;
    if (pregunta3 == 'no') no += 1; 
    
    if (pregunta4 == 'si') si += 1;
    if (pregunta4 == 'no') no += 1;
    
    if (pregunta5 == 'si') si += 1;
    if (pregunta5 == 'no') no += 1;
    
    if (pregunta6 == 'si') si += 1;
    if (pregunta6 == 'no') no += 1;
    
    if (pregunta7 == 'si') si += 1;
    if (pregunta7 == 'no') no += 1;
    
    if (pregunta8 == 'si') si += 1;
    if (pregunta8 == 'no') no += 1;
    
    if (pregunta9 == 'si') si += 1;
    if (pregunta9 == 'no') no += 1;
    
    if (pregunta10 == 'si') si += 1;
    if (pregunta10 == 'no') no += 1;
    
    let total = si + no;
    
    if (si > no) resultado = `Felicidades tienes los gustos para ser un programador, empieza y súmate a las clases de Harold!.<br> Resultados: Si: ${si} No: ${no}`
    
    if (si < no) resultado = `Quizá no tengas los gustos para ser programador, pero de seguro tienes gustos y habilidades en campos diferentes.<br> Resultados: Si: ${si} No: ${no}`

    if ( si == no) resultado = `Tienes iniciativa y es lo importante, empieza y súmate a las clases de Harold y de seguro te gustará la programación.<br> Resultados: Si: ${si} No: ${no}`
        
    if (total !== 10) resultado = 'No has completado el formulario, por favor contesta todas las preguntas';
    
    return resultado;
  }
  
  document.querySelector('.boton').addEventListener('click', event => {
    const resultado = botonClick();
    const elemento = document.querySelector('.resultado');
  
    if(resultado !== '') {  
      elemento.classList.remove('oculto');
      elemento.innerHTML = resultado;
      elemento.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    } else {
      elemento.classList.add('oculto');
    }
  });
  