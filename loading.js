(function(root){
 'use strict';
 const tips=[
  ['La escala del 1 al 5','1 · Nunca<br>2 · Casi nunca<br>3 · Algunas veces<br>4 · Casi siempre<br>5 · Siempre'],
  ['Tu experiencia cuenta','Responde pensando en la conducta habitual en el trabajo. Elige la frecuencia que mejor refleje lo que has observado.'],
  ['Dale rostro a tu perfil','Al entrar, toca “Cambiar mi foto”. Elige una foto tuya de frente, ajusta el recorte y pulsa “Guardar foto”.'],
  ['Avanza a tu ritmo','Cada cuestionario tiene 28 preguntas en 7 etapas. Espera la confirmación de guardado; puedes pausar y continuar desde tu enlace personal.'],
  ['Crecer como personas y como equipo','La evaluación tiene como finalidad orientar nuestra educación continua y la mejora integral del ser humano, para que ese crecimiento se refleje en la empresa.'],
  ['Un espacio de confianza','Tus respuestas tienen acceso restringido. El tablero de coordinación muestra el avance, sin mostrar las respuestas individuales. Conserva tu enlace personal para ti.']
 ];
 function markup(){return '<div class="emd-wait"><div class="emd-wait-motion" aria-hidden="true"><span></span><span></span><span></span></div><p class="emd-wait-label">Mientras preparamos tu tablero</p><section class="emd-wait-tip" aria-label="Orientación para la evaluación"><p class="emd-tip-count">Consejo <span data-tip-count>1</span> de '+tips.length+'</p><h2 data-tip-title>'+tips[0][0]+'</h2><p data-tip-body>'+tips[0][1]+'</p><button type="button" class="emd-tip-next">Siguiente consejo →</button></section></div>'}
 function mount(host){
  if(!host)return ()=>{};
  let index=0;const title=host.querySelector('[data-tip-title]'),body=host.querySelector('[data-tip-body]'),count=host.querySelector('[data-tip-count]'),next=host.querySelector('.emd-tip-next');
  if(!title||!body||!count||!next)return ()=>{};
  function advance(){index=(index+1)%tips.length;title.textContent=tips[index][0];body.innerHTML=tips[index][1];count.textContent=String(index+1)}
  // Pause on interaction and respect reduced motion; the next button remains available.
  const timer=root.matchMedia?.('(prefers-reduced-motion: reduce)').matches?null:setInterval(()=>{if(!host.matches(':hover, :focus-within'))advance()},10000);
  next.addEventListener('click',advance);
  return ()=>{clearInterval(timer);next.removeEventListener('click',advance)};
 }
 root.EmdLoading={markup,mount};
})(typeof window==='object'?window:globalThis);
