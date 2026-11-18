const $=(s)=>document.querySelector(s), main=$('#main');
const CHAPTERS = [
  {
    "title": "Mäta och klippa",
    "ids": [
      0,
      1
    ],
    "desc": "Mät ut sömsmånen och klipp ut tygdelarna.",
    "image": 0
  },
  {
    "title": "Nåla och sy för hand",
    "ids": [
      2,
      3,
      4
    ],
    "desc": "Håll ihop tyget, trä nålen och sy de första stygnen.",
    "image": 2
  },
  {
    "title": "Sy fast knappar",
    "ids": [
      5,
      6
    ],
    "desc": "Se hur stygnen går genom två respektive fyra hål.",
    "image": 6
  },
  {
    "title": "Trä band och virka",
    "ids": [
      7,
      8
    ],
    "desc": "Trä ett band genom tyg eller virka en kedja av luftmaskor.",
    "image": 8
  }
];
const TERMS = [
  [
    "Rätsida",
    "Den sida av tyget som oftast ska synas utåt."
  ],
  [
    "Avigsida",
    "Tygets baksida. Här fäster du tråden när du syr i en knapp."
  ],
  [
    "Sömsmån",
    "Avståndet från tygkanten till sömmen."
  ],
  [
    "Fåll",
    "En kant som vikts upp och fästs."
  ],
  [
    "Stygn",
    "Ett steg nålen och tråden gör genom tyget."
  ],
  [
    "Förstygn",
    "En rad enkla stygn där tråden växlar mellan tygets fram- och baksida."
  ],
  [
    "Knapphål",
    "Öppningen i tyget som knappen förs igenom vid knäppning."
  ],
  [
    "Tygkanal",
    "En sydd passage där till exempel ett band eller en resår kan löpa."
  ],
  [
    "Luftmaska",
    "En maska som bildas när virknålen drar garn genom öglan som sitter på nålen."
  ]
];
function esc(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function closeMenu(){document.body.classList.remove('nav-open');$('#menu').setAttribute('aria-expanded','false')}
$('#menu').onclick=()=>{const open=document.body.classList.toggle('nav-open');$('#menu').setAttribute('aria-expanded',String(open))};$('#veil').onclick=closeMenu;
$('#textSize').onclick=()=>{const big=document.body.classList.toggle('bigtext');$('#textSize').setAttribute('aria-pressed',String(big));$('#textSize').setAttribute('aria-label',big?'Växla till vanlig textstorlek':'Växla till större text')};
function navigation(){const q=$('#search').value.trim().toLocaleLowerCase('sv');let count=0;$('#toolnav').innerHTML=CHAPTERS.map((c,i)=>{const tools=c.ids.filter(k=>TOOLS[k].name.toLocaleLowerCase('sv').includes(q));count+=tools.length;return tools.length?`<section><h2>${String(i+1).padStart(2,'0')} ${c.title.toLocaleUpperCase('sv')}</h2>${tools.map(k=>`<a href="#${TOOLS[k].slug}" ${location.hash==='#'+TOOLS[k].slug?'aria-current="page"':''}><span>${String(k+1).padStart(2,'0')}</span>${TOOLS[k].name}</a>`).join('')}</section>`:''}).join('');$('#noResults').hidden=count>0}
$('#search').oninput=navigation;
$('.skip').onclick=e=>{e.preventDefault();main.focus();main.scrollIntoView({block:'start'})};
let cleanup=()=>{};
function home(){main.innerHTML=`<section class="hero"><div><p class="eyebrow">EN DIGITAL LÄROBOK I TEXTILSLÖJD</p><h1>Lär känna<br>verktygen.</h1><p>Läs hur verktygen fungerar, se arbetsrörelserna och förstå hur du använder dem med kontroll.</p><p>Från att mäta och klippa tyg till att sy fast knappar och virka.</p><a class="button-link" href="#symatt">Börja med mätning <span>→</span></a></div><img class="photo" src="verkstad.jpg?v=atelje1" alt="Tygsax, symått, knappnålar och virknål"></section><section aria-labelledby="chaptersTitle"><div class="section-head"><h2 id="chaptersTitle">Följ arbetet steg för steg</h2><p>4 kapitel · 9 redskap och tillbehör</p></div><div class="chapters">${CHAPTERS.map((c,i)=>`<a class="chapter" href="#${TOOLS[c.ids[0]].slug}"><span class="number">0${i+1}</span><div><h3>${c.title}</h3><p>${c.desc}</p></div><img src="tool-${c.image}.jpg?v=atelje1" alt=""></a>`).join('')}</div></section><section class="intro-note"><h2>En bok att läsa och återvända till</h2><p>Varje verktyg har en egen sida med en illustration, en styrbar demonstration och en utförlig beskrivning. Välj ett namn i menyn när du behöver veta mer om ett särskilt verktyg.</p><p>Du kan pausa, dra i tidslinjen och sänka hastigheten. Läs alltid instruktionen och se lärarens genomgång innan du provar själv.</p><a href="#borja">Läs detta innan du börjar →</a></section>`}
function before(){main.innerHTML=`<p class="eyebrow">INNAN DU BÖRJAR</p><h1>Arbeta med kontroll</h1><p class="intro">Börja med att titta på materialet och välja rätt redskap för momentet.</p><div class="reading">
<h2>Så använder du boken</h2><p>Välj ett redskap i menyn. Titta på fotot och spela demonstrationen. Använd tidslinjen eller knapparna under filmen för att se en del i taget. Under Så använder du och Säkerhet finns instruktioner för arbetsmomentet.</p>
<h2>Förbered arbetsplatsen</h2><p>Ha bra ljus och lägg tyget plant. Ställ fram en nålskål eller nåldyna så att du kan lägga ifrån dig nålarna direkt. Sitt så att du har plats att arbeta utan att stöta till någon.</p>
<h2>Var rädd om händerna</h2><p>Håll fingrarna vid sidan om nålens eller saxens väg. Stäng saxen när du lägger ner den och plocka upp nålar som hamnar på golvet. Ta bort knappnålar innan de når symaskinens nål.</p>
<h2>Om demonstrationerna</h2><p>Fotona visar redskapen i en illustrerad syateljé. Animationerna kombinerar foton med förklarande illustrationer som visar hur exempelvis tråden går genom tyget eller knappen. Vissa bilder visar tyget från sidan så att du ser vad som händer på avigsidan. Se lärarens genomgång innan du provar själv.</p>
<a class="button-link" href="#symatt">Till första verktyget <span>→</span></a></div>`}
function glossary(){main.innerHTML=`<p class="eyebrow">ORDLISTA</p><h1>Språket i slöjdsalen</h1><p class="intro">Här hittar du ord som återkommer i boken och i lärarens instruktioner.</p><div class="glossary reading"><dl>${TERMS.map(([t,d])=>`<dt>${t}</dt><dd>${d}</dd>`).join('')}</dl></div>`}
function toolPage(k){const r=TOOLS[k],ci=CHAPTERS.findIndex(c=>c.ids.includes(k));main.innerHTML=`<div class="crumb"><a href="#">Boken</a> / ${CHAPTERS[ci].title}</div><section class="tool-heading"><div><p class="eyebrow">KAPITEL 0${ci+1} · VERKTYG ${String(k+1).padStart(2,'0')}</p><h1>${r.name}</h1><p class="intro">${r.what}</p></div><img src="tool-${r.idx}.jpg?v=atelje1" alt="Foto av ${r.name.toLocaleLowerCase('sv')}"></section><section class="viewer" aria-label="Demonstration av ${r.name.toLocaleLowerCase('sv')}"><div class="viewer-toolbar"><span><i class="live-dot"></i>SE HUR VERKTYGET ARBETAR</span><button id="fullscreen" aria-label="Visa demonstrationen i helskärm">Förstora ↗</button></div><div class="canvas-wrap"><video id="demoVideo" playsinline preload="metadata" poster="poster-${r.slug}.jpg?v=atelje1" aria-label="Animerat klipp som visar ${r.name.toLocaleLowerCase('sv')}"><source src="clip-${r.slug}.mp4?v=atelje1" type="video/mp4">Din webbläsare kan inte spela klippet.</video></div><div class="viewer-controls"><div class="control-row"><button id="play">▶ Spela</button><button id="restart" aria-label="Börja demonstrationen från början">↺ Börja om</button><button id="nextFrame" aria-label="Pausa och gå fram en bildruta">Nästa bildruta</button><label>Hastighet <select id="speed" aria-label="Uppspelningshastighet"><option value="0.25">0,25×</option><option value="0.5">0,5×</option><option value="1" selected>1×</option></select></label></div><div class="timeline"><input id="timeline" type="range" min="0" max="1000" value="0" aria-label="Välj läge i arbetsrörelsen"><output id="time">0,0 / 8 s</output></div></div><div class="phase-row" aria-label="Demonstrationens tre delar">${PHASES[k].map((p,i)=>`<button data-phase="${i}" aria-pressed="${i===0}"><b>0${i+1}</b><span>${p}</span></button>`).join('')}</div><p class="fig-note">${r.note} Låt läraren visa handgreppet. <a href="${r.slug}.gif?v=atelje1" download>Ladda ner animationen som GIF</a></p></section><div class="tabs" role="tablist" aria-label="Läs om verktyget"><button role="tab" id="tab-understand" aria-controls="panel-understand" aria-selected="true">Lär känna</button><button role="tab" id="tab-how" aria-controls="panel-how" aria-selected="false" tabindex="-1">Så använder du</button><button role="tab" id="tab-safe" aria-controls="panel-safe" aria-selected="false" tabindex="-1">Säkerhet</button></div><div class="reading"><section role="tabpanel" id="panel-understand" aria-labelledby="tab-understand"><h2>Vad använder du verktyget till?</h2><p>${r.use}</p><h2>Lär känna delarna</h2><p>${r.parts}</p><div class="context"><p class="eyebrow">I DITT SLÖJDPROJEKT</p><p>${r.example}</p></div><h2>Förstå arbetssättet</h2><p>${r.why}</p></section><section role="tabpanel" id="panel-how" aria-labelledby="tab-how" hidden><h2>Arbetssätt steg för steg</h2><ol class="step-list">${r.steps.map(([t,d],i)=>`<li><span class="step-number">0${i+1}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}</ol><h2>Ett bra resultat</h2><p>${r.result}</p></section><section role="tabpanel" id="panel-safe" aria-labelledby="tab-safe" hidden><p class="safety-intro">LÄS FÖRE ARBETET</p><h2>Arbeta säkert</h2><p>${r.safe}</p><h2>Vanliga misstag</h2><p>${r.error}</p><h2>Stanna och fråga</h2><p>Om nålen, saxen eller tråden fastnar, stanna och be läraren om hjälp. Dra försiktigt och håll fingrarna ur vägen.</p></section></div><nav class="page-nav" aria-label="Föregående och nästa verktyg">${k?`<a href="#${TOOLS[k-1].slug}">← ${TOOLS[k-1].name}</a>`:'<a href="#">← Till boken</a>'}${k<TOOLS.length-1?`<a href="#${TOOLS[k+1].slug}">${TOOLS[k+1].name} →</a>`:'<a href="#ordlista">Till ordlistan →</a>'}</nav>`;
const tabs=[...document.querySelectorAll('[role=tab]')];function selectTab(tab){tabs.forEach(b=>{const active=b===tab;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;$('#'+b.getAttribute('aria-controls')).hidden=!active})}tabs.forEach((tab,i)=>{tab.onclick=()=>selectTab(tab);tab.onkeydown=e=>{if(['ArrowRight','ArrowLeft','Home','End'].includes(e.key)){e.preventDefault();const n=e.key==='Home'?0:e.key==='End'?2:(i+(e.key==='ArrowRight'?1:2))%3;selectTab(tabs[n]);tabs[n].focus()}}});
const video=$('#demoVideo'),timeline=$('#timeline'),play=$('#play'),out=$('#time');
function sync(){const duration=Number.isFinite(video.duration)?video.duration:8;const t=video.currentTime/duration;timeline.value=Math.round(t*1000);out.textContent=video.currentTime.toFixed(1).replace('.',',')+' / '+duration.toFixed(0)+' s';play.textContent=video.paused?'▶ Spela':'Ⅱ Pausa';play.setAttribute('aria-label',video.paused?'Spela demonstrationen':'Pausa demonstrationen');document.querySelectorAll('[data-phase]').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===(t<1/3?0:t<2/3?1:2))))}
for(const name of ['timeupdate','loadedmetadata','pause','play','ended','seeked'])video.addEventListener(name,sync);
play.onclick=async()=>{if(video.paused){if(video.ended)video.currentTime=0;try{await video.play()}catch{out.textContent='Ladda om klippet'}}else video.pause()};
$('#restart').onclick=()=>{video.pause();video.currentTime=0;sync()};timeline.oninput=()=>{video.pause();video.currentTime=Number(timeline.value)/1000*(video.duration||8);sync()};$('#speed').onchange=e=>video.playbackRate=Number(e.target.value);$('#nextFrame').onclick=()=>{video.pause();video.currentTime=Math.min((video.duration||8)-.01,video.currentTime+1/12);sync()};document.querySelectorAll('[data-phase]').forEach(b=>b.onclick=()=>{video.pause();video.currentTime=[0,.34,.67][Number(b.dataset.phase)]*(video.duration||8);sync()});
$('#fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await $('.viewer').requestFullscreen()}catch{const box=$('.viewer');box.classList.toggle('expanded');box.scrollIntoView({block:'start',behavior:'smooth'})}};
const visibility=()=>{if(document.hidden)video.pause()};document.addEventListener('visibilitychange',visibility);cleanup=()=>{video.pause();document.removeEventListener('visibilitychange',visibility)};

}
function route(){cleanup();cleanup=()=>{};closeMenu();navigation();const hash=location.hash.slice(1);const k=TOOLS.findIndex(r=>r.slug===hash);if(k>=0){toolPage(k);document.title=TOOLS[k].name+' · Verktyg i textilslöjden'}else if(hash==='borja'){before();document.title='Innan du börjar · Verktyg i textilslöjden'}else if(hash==='ordlista'){glossary();document.title='Ordlista · Verktyg i textilslöjden'}else{home();document.title='Verktyg i textilslöjden'}window.scrollTo(0,0)}
window.addEventListener('hashchange',route);route();
