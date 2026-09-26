const DATA = [
{ id:'c1', title:'Claridad y Comprensión', jump:'c1',
  desc:'¿Los textos se entienden a la primera, sin necesitar conocimientos bancarios?',
  items:[
    { id:'c1-1', ok:true,  pts:4, t:'Los productos usan palabras cotidianas, no términos bancarios técnicos.', w:'“Bolsillos”, “Metas” y “Colchón” reemplazan a “subcuentas de ahorro programado”.' },
    { id:'c1-2', ok:true,  pts:3, t:'El paso a paso de apertura de cuenta explica cada acción en una frase corta.', w:'“Escribe tu número de celular”, “Escanea tu documento por ambas caras”: una instrucción, una acción.' },
    { id:'c1-3', ok:true,  pts:3, t:'Explica en lenguaje simple por qué el banco no tiene oficinas físicas.', w:'Lo presenta como ventaja (“sin filas, sin cuotas de manejo”), no como una limitación sin explicar.' },
    { id:'c1-4', ok:false, pts:3, t:'Cada función del menú se explica con una frase, no solo con su nombre.', w:'No se pudo verificar sin navegar cada sección del sitio en vivo; se revisó únicamente el contenido público disponible.' },
    { id:'c1-5', ok:true,  pts:3, t:'Los botones principales usan frases completas y no solo una palabra suelta.', w:'“Abre una cuenta” en lugar de solo “Cuenta”.' },
  ]},
{ id:'c2', title:'Consistencia', jump:'c2',
  desc:'¿La misma acción y la misma marca se nombran siempre igual?',
  items:[
    { id:'c2-1', ok:false, pts:4, t:'La acción de acceder a la cuenta se llama igual en todo el flujo.', w:'Se encontraron dos nombres distintos para la misma acción: “Entrar” en el sitio web e “Inicia sesión” dentro de las pantallas de la app.' },
    { id:'c2-2', ok:true,  pts:3, t:'El nombre de la marca se escribe siempre igual, sin variaciones.', w:'“Nequi” aparece siempre igual, sin mayúsculas sueltas ni variantes de escritura.' },
    { id:'c2-3', ok:true,  pts:3, t:'El selector de país (bandera) se mantiene en la misma posición del encabezado.', w:'Colombia y Panamá aparecen como banderas fijas en la parte superior, según el contenido público revisado.' },
    { id:'c2-4', ok:true,  pts:3, t:'El tono informal se mantiene igual entre el sitio web y la app.', w:'Expresiones como “tu plata” y “tu celu” se repiten en ambos canales.' },
    { id:'c2-5', ok:true,  pts:3, t:'El pie de página organiza los enlaces con la misma estructura de categorías.', w:'“Ayuda” y “Conócenos” agrupan sus enlaces con el mismo patrón de lista.' },
  ]},
{ id:'c3', title:'Jerarquía y Escaneabilidad', jump:'c3',
  desc:'¿Se puede escanear la página sin leer todo el texto?',
  items:[
    { id:'c3-1', ok:true,  pts:4, t:'El menú agrupa las opciones en categorías en vez de listarlas todas sueltas.', w:'“Ayuda” y “Conócenos” separan temas distintos en vez de mezclar seis enlaces en una sola lista.' },
    { id:'c3-2', ok:true,  pts:3, t:'Los botones principales resaltan visualmente sobre el resto del texto.', w:'“Entrar”, “Recarga” y “Usar QR” funcionan como acciones destacadas en el encabezado.' },
    { id:'c3-3', ok:true,  pts:3, t:'El proceso de apertura de cuenta está numerado paso a paso.', w:'Los 8 pasos del registro están enumerados, lo que permite ubicarse sin leer todo el texto.' },
    { id:'c3-4', ok:false, pts:3, t:'Los artículos del centro de ayuda usan subtítulos cortos por tema.', w:'No se revisó el contenido interno de cada artículo del centro de ayuda, solo su acceso desde el menú.' },
  ]},
{ id:'c4', title:'Orientación al Usuario', jump:'c4',
  desc:'¿El texto le dice a la persona qué esperar antes de que actúe?',
  items:[
    { id:'c4-1', ok:true,  pts:4, t:'Explica para qué se pide el número de celular antes de solicitarlo.', w:'“Recuerda que este será tu número de cuenta” anticipa el uso del dato antes de pedirlo.' },
    { id:'c4-2', ok:true,  pts:3, t:'Indica qué documentos se necesitan antes de iniciar el registro.', w:'Menciona cédula, selfie y correo como requisitos, antes de empezar el flujo.' },
    { id:'c4-3', ok:true,  pts:3, t:'Ante un posible fraude, señala un canal oficial claro para verificar.', w:'Remite siempre a www.nequi.com.co y a la línea oficial, no a enlaces externos.' },
    { id:'c4-4', ok:false, pts:3, t:'Muestra el saldo disponible en todo momento dentro de la app, no solo al final.', w:'No se pudo confirmar sin iniciar sesión en una cuenta real.' },
  ]},
{ id:'c5', title:'Accesibilidad', jump:'c5',
  desc:'¿El servicio es usable por personas con distintas capacidades o conexiones?',
  items:[
    { id:'c5-1', ok:true,  pts:4, t:'Informa los requisitos técnicos mínimos antes de pedir la descarga.', w:'Especifica sistema operativo iOS y Android mínimos antes del enlace de descarga.' },
    { id:'c5-2', ok:true,  pts:3, t:'Ofrece un canal de ayuda que no depende solo de leer texto.', w:'Línea telefónica y chat en vivo, además del centro de ayuda escrito.' },
    { id:'c5-3', ok:false, pts:3, t:'El contraste entre texto y fondo cumple el mínimo recomendado (4.5:1).', w:'No se pudo medir sin inspeccionar el sitio en vivo con herramientas de contraste.' },
    { id:'c5-4', ok:false, pts:3, t:'Los formularios señalan un error con palabras, no solo con color.', w:'No se pudo verificar sin completar un formulario real del sitio.' },
  ]},
{ id:'c6', title:'Microcopy Efectivo', jump:'c6',
  desc:'¿Los textos cortos (botones, etiquetas, avisos) hacen su trabajo?',
  items:[
    { id:'c6-1', ok:true,  pts:4, t:'Los botones usan verbos de acción cortos, no sustantivos genéricos.', w:'“Entrar”, “Recarga”, “Usar QR”: cada uno dice exactamente qué va a pasar.' },
    { id:'c6-2', ok:true,  pts:3, t:'Los nombres de producto funcionan como microcopy memorable.', w:'“Bolsillos” y “Metas” comunican la función del producto sin explicación adicional.' },
    { id:'c6-3', ok:true,  pts:3, t:'Los avisos de seguridad usan un tono claro y directo, no alarmista.', w:'Explican el riesgo y el canal oficial sin generar pánico innecesario.' },
    { id:'c6-4', ok:false, pts:3, t:'Las condiciones de uso también se resumen en lenguaje simple.', w:'El texto legal revisado mantiene lenguaje jurídico extenso, sin un resumen en palabras simples.' },
  ]},
];

const LAWS = [
{ id:'lm', title:'Ley de Miller', jump:'leyes',
  desc:'La memoria de corto plazo retiene bien entre 5 y 9 elementos a la vez; por eso hay que agrupar la información en bloques pequeños.',
  items:[
    { id:'lm-1', ok:true, pts:4, t:'El pie de página agrupa los enlaces en bloques pequeños, no en una lista larga.', w:'“Ayuda” reúne 6 enlaces y “Conócenos” reúne 5, en vez de mostrar 11 enlaces sueltos.' },
    { id:'lm-2', ok:true, pts:4, t:'El registro se dividió en pasos pequeños, no en un formulario largo de una sola vez.', w:'8 pasos cortos en vez de un único formulario con todos los campos juntos.' },
    { id:'lm-3', ok:true, pts:4, t:'La portada prioriza 2 o 3 acciones principales, no todos los productos a la vez.', w:'“Entrar”, “Recarga” y “Usar QR” destacan sobre el resto de opciones del menú.' },
  ]},
{ id:'lj', title:'Ley de Jakob', jump:'leyes',
  desc:'Las personas esperan que un sitio nuevo funcione como los sitios que ya conocen.',
  items:[
    { id:'lj-1', ok:true, pts:4, t:'Usa patrones típicos de banca digital: selector de país y botón de acceso arriba a la derecha.', w:'Bandera de país y “Entrar” en el encabezado, como en la mayoría de bancos digitales.' },
    { id:'lj-2', ok:true, pts:4, t:'La palabra “Ayuda” está donde un usuario esperaría encontrarla.', w:'Aparece en el pie de página y dentro del flujo de la app, ubicaciones habituales en apps financieras.' },
    { id:'lj-3', ok:true, pts:4, t:'El registro sigue el mismo patrón que otras apps financieras colombianas.', w:'Documento de identidad, número de celular y selfie, en ese orden habitual.' },
  ]},
{ id:'lf', title:'Ley de Fitts', jump:'leyes',
  desc:'Cuanto más se usa un elemento, más grande y fácil de alcanzar debe ser.',
  items:[
    { id:'lf-1', ok:true,  pts:4, t:'Los botones principales son elementos claramente pulsables, no solo texto pequeño.', w:'“Entrar” y “Abre una cuenta” se muestran como botones, no como enlaces de texto plano.' },
    { id:'lf-2', ok:true,  pts:4, t:'Las acciones más usadas están en la pantalla principal de la app, no escondidas en submenús.', w:'Enviar y pedir plata aparecen como accesos directos desde el inicio, según el flujo revisado.' },
    { id:'lf-3', ok:false, pts:4, t:'El tamaño de cada botón cumple el mínimo táctil recomendado (44 × 44 px).', w:'No se pudo medir en píxeles sin inspeccionar el sitio en vivo.' },
  ]},
];

const ALL_GROUPS = [...DATA, ...LAWS];
const MAX_SCORE = ALL_GROUPS.reduce((a,g) => a + g.items.reduce((b,it) => b + it.pts, 0), 0); // = 120
const STORAGE_KEY = 'nequi-checklist-v2';
const SAVED_AT_KEY = 'nequi-checklist-v2-savedAt';

function loadState(){
  try{ return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null; }catch(e){ return null; }
}
function persistState(state){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); return true; }catch(e){ return false; }
}

let state = loadState();
if (!state){
  state = {};
  ALL_GROUPS.forEach(g => g.items.forEach(it => state[it.id] = it.ok));
}

function scoreLabel(pct){
  if (pct >= 90) return 'Excelente experiencia de escritura';
  if (pct >= 70) return 'Buena, con detalles por pulir';
  if (pct >= 45) return 'Aceptable, con oportunidades claras de mejora';
  return 'Necesita mejoras importantes';
}

function computeTotals(){
  let checkedItems = 0, totalItems = 0, score = 0;
  ALL_GROUPS.forEach(g => g.items.forEach(it => {
    totalItems++;
    if (state[it.id]){ checkedItems++; score += it.pts; }
  }));
  return { checkedItems, totalItems, score };
}

function render(){
  const list = document.getElementById('list');
  list.innerHTML = '';

  function renderGroup(g){
    const total = g.items.length;
    const checked = g.items.filter(it => state[it.id]).length;
    const sec = document.createElement('section');
    sec.className = 'cat';
    sec.id = g.id;
    sec.innerHTML = `
      <div class="cat-head"><h2>${g.title}</h2><span class="cat-score">${checked}/${total}</span></div>
      <p class="cat-desc">${g.desc}</p>
    `;
    g.items.forEach(it => {
      const row = document.createElement('div');
      row.className = 'item';
      row.dataset.state = state[it.id] ? 'ok' : 'no';
      row.innerHTML = `
        <input type="checkbox" id="${it.id}" ${state[it.id] ? 'checked' : ''}>
        <div>
          <label for="${it.id}">${it.t}</label>
          <p class="why">${it.w}</p>
          <span class="tag">${state[it.id] ? 'Cumple · +' + it.pts + ' pts' : 'No cumple / sin verificar'}</span>
        </div>`;
      sec.appendChild(row);
    });
    list.appendChild(sec);
  }

  DATA.forEach(g => renderGroup(g));

  const lawsHeader = document.createElement('h2');
  lawsHeader.id = 'leyes';
  lawsHeader.style.cssText = 'font-size:1.4rem;font-weight:800;margin:2.5rem 0 1rem;color:var(--purple-2)';
  lawsHeader.textContent = 'Leyes de UX aplicadas';
  list.appendChild(lawsHeader);
  LAWS.forEach(g => renderGroup(g));

  list.querySelectorAll('input[type=checkbox]').forEach(cb => {
    cb.addEventListener('change', () => {
      state[cb.id] = cb.checked;
      persistState(state); // autoguardado silencioso, como exige la guía
      updateResults();
      render();
      document.getElementById('saveStatus').textContent = 'Hay cambios sin confirmar con "Guardar progreso".';
      document.getElementById('saveStatus').classList.remove('just-saved');
    });
  });

  updateResults();
}

function renderCatBars(){
  const box = document.getElementById('catBars');
  box.innerHTML = '';
  ALL_GROUPS.forEach(g => {
    const total = g.items.reduce((a,it) => a + it.pts, 0);
    const earned = g.items.reduce((a,it) => a + (state[it.id] ? it.pts : 0), 0);
    const pct = total ? Math.round(earned/total*100) : 0;
    const isLaw = g.jump === 'leyes';
    const row = document.createElement('div');
    row.className = 'cat-bar-row';
    row.innerHTML = `
      <span class="cat-bar-name">${g.title}</span>
      <span class="cat-bar-track"><span class="cat-bar-fill ${isLaw?'law':''}" style="width:${pct}%"></span></span>
      <span class="cat-bar-pts">${earned}/${total}</span>`;
    box.appendChild(row);
  });
}

function updateResults(){
  const { checkedItems, totalItems, score } = computeTotals();
  const pct = Math.round(score / MAX_SCORE * 100);
  document.getElementById('scoreVal').textContent = score;
  document.getElementById('scoreTag').textContent = scoreLabel(pct) + ' (' + pct + '%)';
  document.getElementById('scoreFill').style.width = pct + '%';
  document.getElementById('count').textContent = checkedItems;
  document.getElementById('total').textContent = totalItems;
  renderCatBars();
}

function showLastSaved(){
  const t = localStorage.getItem(SAVED_AT_KEY);
  const el = document.getElementById('lastSaved');
  if (t) el.textContent = 'Último guardado: ' + new Date(t).toLocaleString('es-CO', { dateStyle:'medium', timeStyle:'short' });
  else el.textContent = '';
}

document.getElementById('saveBtn').addEventListener('click', () => {
  const ok = persistState(state);
  const now = new Date().toISOString();
  const status = document.getElementById('saveStatus');
  if (ok){
    localStorage.setItem(SAVED_AT_KEY, now);
    status.textContent = '✓ Progreso guardado en este navegador.';
    status.classList.add('just-saved');
  } else {
    status.textContent = 'No se pudo guardar (el navegador bloqueó el almacenamiento local).';
    status.classList.remove('just-saved');
  }
  showLastSaved();
});

document.getElementById('reset').addEventListener('click', () => {
  ALL_GROUPS.forEach(g => g.items.forEach(it => state[it.id] = it.ok));
  persistState(state);
  localStorage.removeItem(SAVED_AT_KEY);
  document.getElementById('saveStatus').textContent = 'Aún no has guardado en esta visita.';
  document.getElementById('saveStatus').classList.remove('just-saved');
  showLastSaved();
  render();
});

render();
showLastSaved();
