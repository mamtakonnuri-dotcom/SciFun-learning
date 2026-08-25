const topics = [
{ id:"plants", icon:"🌱", title:"Plants", kn:"ಸಸ್ಯಗಳು", intro:"ಗಿಡದ ಭಾಗಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು ಅವುಗಳ ಕೆಲಸವನ್ನು ಕನ್ನಡದಲ್ಲಿ ಕಲಿಯಿರಿ.",
items:[
["🌱","Root","ಬೇರು","ಬೇರು ಮಣ್ಣಿನ ಒಳಗೆ ಇರುತ್ತದೆ. ಇದು ಗಿಡವನ್ನು ಮಣ್ಣಿನಲ್ಲಿ ಗಟ್ಟಿಯಾಗಿ ಹಿಡಿದುಕೊಳ್ಳುತ್ತದೆ ಮತ್ತು ಮಣ್ಣಿನಿಂದ ನೀರು ಹಾಗೂ ಪೋಷಕಾಂಶಗಳನ್ನು ಹೀರಿಕೊಳ್ಳುತ್ತದೆ."],
["🌿","Stem","ಕಾಂಡ","ಕಾಂಡವು ಗಿಡವನ್ನು ನೇರವಾಗಿ ನಿಲ್ಲಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಇದು ನೀರನ್ನು ಗಿಡದ ಬೇರೆ ಭಾಗಗಳಿಗೆ ಸಾಗಿಸುತ್ತದೆ."],
["🍃","Leaf","ಎಲೆ","ಎಲೆಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಹಸಿರು ಬಣ್ಣದಲ್ಲಿರುತ್ತವೆ. ಸೂರ್ಯನ ಬೆಳಕನ್ನು ಬಳಸಿ ಗಿಡಕ್ಕೆ ಆಹಾರ ತಯಾರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ."],
["🌸","Flower","ಹೂವು","ಹೂವು ಗಿಡದ ಒಂದು ಪ್ರಮುಖ ಭಾಗ. ಕೆಲವು ಹೂವುಗಳು ನಂತರ ಹಣ್ಣು ಮತ್ತು ಬೀಜಗಳಾಗಿ ಬೆಳೆಯುತ್ತವೆ."],
["🍎","Fruit","ಹಣ್ಣು","ಹಣ್ಣು ಬೀಜಗಳನ್ನು ರಕ್ಷಿಸುತ್ತದೆ. ನಾವು ತಿನ್ನುವ ಅನೇಕ ಹಣ್ಣುಗಳ ಒಳಗೆ ಬೀಜಗಳು ಇರುತ್ತವೆ."],
["🌰","Seed","ಬೀಜ","ಬೀಜದಿಂದ ಹೊಸ ಗಿಡ ಬೆಳೆಯಬಹುದು. ನೀರು, ಗಾಳಿ ಮತ್ತು ಸರಿಯಾದ ಪರಿಸರ ಸಿಕ್ಕರೆ ಬೀಜ ಮೊಳಕೆಯೊಡೆಯುತ್ತದೆ."]
]},
{ id:"animals",icon:"🐾",title:"Animals & Their Homes",kn:"ಪ್ರಾಣಿಗಳು ಮತ್ತು ಅವುಗಳ ಮನೆಗಳು",intro:"ಪ್ರಾಣಿಯನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಅದರ ಮನೆ ಮತ್ತು ಸರಳ ವಿವರಣೆಯನ್ನು ಕಲಿಯಿರಿ.",
items:[
["🐶","Dog","ನಾಯಿ","ನಾಯಿಯು ಸಾಕುಪ್ರಾಣಿ. ನಾಯಿಯ ಮನೆಯನ್ನು ಕೆನಲ್ (Kennel) ಎಂದು ಕರೆಯುತ್ತಾರೆ."],
["🐦","Bird","ಹಕ್ಕಿ","ಹಕ್ಕಿಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಮರಗಳ ಮೇಲೆ ಗೂಡು ಕಟ್ಟುತ್ತವೆ. ಹಕ್ಕಿಯ ಮನೆಯನ್ನು ಗೂಡು (Nest) ಎಂದು ಕರೆಯುತ್ತಾರೆ."],
["🦁","Lion","ಸಿಂಹ","ಸಿಂಹವು ಕಾಡಿನಲ್ಲಿ ವಾಸಿಸುತ್ತದೆ. ಸಿಂಹದ ಮನೆಯನ್ನು ಗುಹೆ (Den) ಎಂದು ಕರೆಯುತ್ತಾರೆ."],
["🐰","Rabbit","ಮೊಲ","ಮೊಲವು ನೆಲದೊಳಗೆ ಬಿಲವನ್ನು ಮಾಡಿಕೊಂಡು ವಾಸಿಸುತ್ತದೆ. ಅದನ್ನು ಬಿಲ (Burrow) ಎಂದು ಕರೆಯುತ್ತಾರೆ."],
["🐝","Bee","ಜೇನುನೊಣ","ಜೇನುನೊಣಗಳು ಗುಂಪಾಗಿ ವಾಸಿಸುತ್ತವೆ. ಅವುಗಳ ಮನೆಯನ್ನು ಜೇನುಗೂಡು (Hive) ಎಂದು ಕರೆಯುತ್ತಾರೆ."]
]},
{ id:"senses",icon:"👀",title:"Five Sense Organs",kn:"ಐದು ಇಂದ್ರಿಯ ಅಂಗಗಳು",intro:"ನಮ್ಮ ಐದು ಇಂದ್ರಿಯ ಅಂಗಗಳು ನಮಗೆ ಜಗತ್ತನ್ನು ತಿಳಿದುಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.",
items:[
["👀","Eyes","ಕಣ್ಣು","ಕಣ್ಣುಗಳಿಂದ ನಾವು ವಸ್ತುಗಳನ್ನು ನೋಡಬಹುದು. ಉದಾಹರಣೆ: ಪುಸ್ತಕವನ್ನು ನೋಡುತ್ತೇವೆ."],
["👂","Ears","ಕಿವಿ","ಕಿವಿಗಳಿಂದ ನಾವು ಶಬ್ದಗಳನ್ನು ಕೇಳಬಹುದು. ಉದಾಹರಣೆ: ಸಂಗೀತವನ್ನು ಕೇಳುತ್ತೇವೆ."],
["👃","Nose","ಮೂಗು","ಮೂಗಿನಿಂದ ನಾವು ವಾಸನೆಯನ್ನು ಗುರುತಿಸಬಹುದು. ಉದಾಹರಣೆ: ಹೂವಿನ ಪರಿಮಳ."],
["👅","Tongue","ನಾಲಿಗೆ","ನಾಲಿಗೆಯಿಂದ ನಾವು ರುಚಿಯನ್ನು ತಿಳಿಯಬಹುದು: ಸಿಹಿ, ಹುಳಿ, ಉಪ್ಪು ಮುಂತಾದವು."],
["✋","Skin","ಚರ್ಮ","ಚರ್ಮದಿಂದ ನಾವು ಸ್ಪರ್ಶದ ಅನುಭವವನ್ನು ಪಡೆಯುತ್ತೇವೆ. ಬಿಸಿ ಮತ್ತು ತಂಪನ್ನು ಅನುಭವಿಸಬಹುದು."]
]},
{ id:"water",icon:"💧",title:"Water Around Us",kn:"ನಮ್ಮ ಸುತ್ತಲಿನ ನೀರು",intro:"ನೀರು ಏಕೆ ಬೇಕು ಮತ್ತು ನೀರನ್ನು ಹೇಗೆ ಉಳಿಸಬಹುದು ಎಂದು ಕಲಿಯೋಣ.",
items:[
["🚰","Drinking","ಕುಡಿಯುವುದು","ಮನುಷ್ಯರಿಗೆ ಬದುಕಲು ನೀರು ಬೇಕು. ನಾವು ಶುದ್ಧ ನೀರನ್ನು ಕುಡಿಯಬೇಕು."],
["🛁","Bathing","ಸ್ನಾನ","ದೇಹವನ್ನು ಸ್ವಚ್ಛವಾಗಿಟ್ಟುಕೊಳ್ಳಲು ನೀರನ್ನು ಬಳಸುತ್ತೇವೆ."],
["🪥","Brushing","ಹಲ್ಲುಜ್ಜುವುದು","ಹಲ್ಲುಜ್ಜುವಾಗ ನೀರನ್ನು ಬಳಸುತ್ತೇವೆ. ನೀರನ್ನು ವ್ಯರ್ಥ ಮಾಡಬಾರದು."],
["🌱","Plants","ಗಿಡಗಳು","ಗಿಡಗಳು ಬೆಳೆಯಲು ನೀರು ಬೇಕು."],
["🐄","Animals","ಪ್ರಾಣಿಗಳು","ಪ್ರಾಣಿಗಳಿಗೂ ಕುಡಿಯಲು ನೀರು ಬೇಕು."]
]},
{ id:"daynight",icon:"☀️🌙",title:"Day & Night",kn:"ಹಗಲು ಮತ್ತು ರಾತ್ರಿ",intro:"ಹಗಲು ಮತ್ತು ರಾತ್ರಿ ಸಮಯದಲ್ಲಿ ನಡೆಯುವ ವಿಷಯಗಳನ್ನು ಗುರುತಿಸೋಣ.",
items:[
["☀️","Day","ಹಗಲು","ಹಗಲಿನಲ್ಲಿ ಸೂರ್ಯನು ಆಕಾಶದಲ್ಲಿ ಕಾಣಿಸುತ್ತಾನೆ. ನಮಗೆ ಬೆಳಕು ಇರುತ್ತದೆ ಮತ್ತು ನಾವು ಶಾಲೆಗೆ ಹೋಗಬಹುದು."],
["🌙","Night","ರಾತ್ರಿ","ರಾತ್ರಿ ಕತ್ತಲಾಗುತ್ತದೆ. ಚಂದ್ರ ಮತ್ತು ನಕ್ಷತ್ರಗಳು ಕಾಣಿಸಬಹುದು. ನಾವು ಸಾಮಾನ್ಯವಾಗಿ ರಾತ್ರಿ ಮಲಗುತ್ತೇವೆ."]
]}
];

function showHome(){
 document.getElementById("app").innerHTML=`<section class="hero"><h1>ನಾವು ವಿಜ್ಞಾನ ಕಲಿಯೋಣ! 🔬</h1><p>Let's Learn Science! — 1st to 3rd Standard</p></section>
 <div class="cards">${topics.map(t=>card(t)).join("")}</div>
 <div class="quiz"><h2>🎮 Ready to Learn?</h2><p>ಒಂದು topic ಆಯ್ಕೆ ಮಾಡಿ, ಕಲಿಯಿರಿ ಮತ್ತು ಆಟ ಆಡಿ!</p><button class="topic-btn" onclick="showQuiz()">🏆 Start Science Quiz</button></div>`;
}
function card(t){return `<article class="card"><div class="emoji">${t.icon}</div><h2>${t.title}</h2><h3>${t.kn}</h3><p>${t.intro}</p><button class="topic-btn" onclick="openTopic('${t.id}')">Explore ➜</button></article>`}
function showTopics(){showHome()}
function openTopic(id){
 const t=topics.find(x=>x.id===id);
 document.getElementById("app").innerHTML=`<div class="content"><button class="back" onclick="showHome()">← Home</button><section class="lesson"><h1>${t.icon} ${t.title}</h1><h2>${t.kn}</h2><p>${t.intro}</p>${visualExplorer(t)}
<div class="parts">${t.items.map((x,i)=>`<button class="part" onclick="explain('${id}',${i})"><span>${x[0]}</span>${x[1]}<br><small>${x[2]}</small></button>`).join("")}</div>
<div id="explain" class="explain">👆 ಗಿಡದ ಭಾಗವನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ — ಅದನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ನೋಡಿ ಮತ್ತು ಕನ್ನಡದಲ್ಲಿ ಕಲಿಯಿರಿ!</div>${gameFor(t)}</section></div>`;
}


function visualExplorer(t){
 if(t.id==="plants") return plantExplorer();
 const icons = t.items.map(x=>x[0]);
 const labels = t.items.map(x=>x[2]);
 return `<div class="visual-explorer">
   <h2>${t.icon} ಚಿತ್ರವನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಕಲಿಯೋಣ!</h2>
   <p>ಯಾವುದೇ ಚಿತ್ರವನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿದರೆ ಅದು <strong>ಪ್ರತ್ಯೇಕವಾಗಿ ಹೈಲೈಟ್</strong> ಆಗುತ್ತದೆ ಮತ್ತು ಅದರ ಬಗ್ಗೆ ಕನ್ನಡದಲ್ಲಿ ವಿವರಣೆ ಬರುತ್ತದೆ.</p>
   <div class="visual-layout">
     <div class="visual-board" id="visual-board-${t.id}">
       ${t.items.map((x,i)=>`<button class="visual-item" id="visual-${t.id}-${i}" onclick="visualSelect('${t.id}',${i})"><span>${x[0]}</span><strong>${x[1]}</strong><small>${x[2]}</small></button>`).join("")}
     </div>
     <div class="visual-focus" id="visual-focus-${t.id}">
       <div class="focus-icon">${t.icon}</div>
       <h3>ಒಂದು ಚಿತ್ರವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ!</h3>
       <p>ಚಿತ್ರವನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು ಕನ್ನಡದಲ್ಲಿ ಕಲಿಯಿರಿ.</p>
     </div>
   </div>
 </div>`;
}
function visualSelect(id,i){
 const t=topics.find(x=>x.id===id), x=t.items[i];
 document.querySelectorAll(`#visual-board-${id} .visual-item`).forEach(e=>e.classList.add("faded"));
 const el=document.getElementById(`visual-${id}-${i}`);
 if(el){el.classList.remove("faded");el.classList.add("selected");}
 document.getElementById(`visual-focus-${id}`).innerHTML=
 `<div class="focus-icon">${x[0]}</div><h3>${x[1]} — ${x[2]}</h3><p>${x[3]}</p><button onclick="showVisualOnly('${id}',${i})">🔎 ಈ ಭಾಗವನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ನೋಡಿ</button>`;
 document.getElementById("explain").innerHTML=`<strong>${x[0]} ${x[1]} — ${x[2]}</strong><br>${x[3]}`;
}
function showVisualOnly(id,i){
 visualSelect(id,i);
 const t=topics.find(x=>x.id===id),x=t.items[i];
 alert("🔎 "+x[2]+" ಅನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಹೈಲೈಟ್ ಮಾಡಲಾಗಿದೆ!");
}

function plantExplorer(){
 return `<div class="plant-explorer">
   <h2>🌱 ಗಿಡವನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಕಲಿಯೋಣ!</h2>
   <p>ಗಿಡದ ಯಾವುದೇ ಭಾಗವನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿದರೆ ಆ ಭಾಗವು <strong>ಪ್ರತ್ಯೇಕವಾಗಿ ಹೈಲೈಟ್</strong> ಆಗುತ್ತದೆ ಮತ್ತು ಅದರ ಬಗ್ಗೆ ಸರಳ ಕನ್ನಡ ವಿವರಣೆ ಬರುತ್ತದೆ.</p>
   <div class="plant-stage">
     <svg class="plant-svg" viewBox="0 0 620 500" role="img" aria-label="Interactive plant diagram">
       <rect x="0" y="0" width="620" height="500" rx="28" fill="#eaf8ff"/>
       <rect x="0" y="350" width="620" height="150" fill="#8fd15a"/>
       <path d="M0 350 Q155 335 310 350 T620 350" fill="#a96f43"/>
       <g id="plant-root" class="plant-part-svg" onclick="plantPart('root')">
         <path d="M310 300 C305 340 300 365 280 390 M310 300 C315 340 320 365 345 395 M300 340 C270 350 245 370 230 395 M320 340 C350 350 375 375 390 400 M285 370 C270 385 260 405 255 425 M335 370 C350 390 360 405 365 425" fill="none" stroke="#7a431f" stroke-width="10" stroke-linecap="round"/>
         <text x="410" y="410" class="svg-label">ಬೇರು</text>
       </g>
       <g id="plant-stem" class="plant-part-svg" onclick="plantPart('stem')">
         <path d="M310 315 L310 155" stroke="#268b3b" stroke-width="18" stroke-linecap="round"/>
         <text x="335" y="220" class="svg-label">ಕಾಂಡ</text>
       </g>
       <g id="plant-leaf" class="plant-part-svg" onclick="plantPart('leaf')">
         <ellipse cx="255" cy="190" rx="75" ry="35" transform="rotate(-25 255 190)" fill="#42b94b"/>
         <ellipse cx="365" cy="165" rx="75" ry="35" transform="rotate(25 365 165)" fill="#42b94b"/>
         <ellipse cx="250" cy="250" rx="70" ry="32" transform="rotate(20 250 250)" fill="#55c653"/>
         <text x="105" y="250" class="svg-label">ಎಲೆ</text>
       </g>
       <g id="plant-flower" class="plant-part-svg" onclick="plantPart('flower')">
         <circle cx="310" cy="120" r="25" fill="#ffd34e"/>
         <circle cx="310" cy="80" r="25" fill="#ff77a8"/>
         <circle cx="275" cy="105" r="25" fill="#ff77a8"/>
         <circle cx="345" cy="105" r="25" fill="#ff77a8"/>
         <circle cx="310" cy="120" r="14" fill="#f5a623"/>
         <text x="375" y="100" class="svg-label">ಹೂವು</text>
       </g>
       <g id="plant-fruit" class="plant-part-svg" onclick="plantPart('fruit')">
         <circle cx="390" cy="245" r="32" fill="#f25a45"/>
         <path d="M390 214 Q400 195 420 200" fill="none" stroke="#268b3b" stroke-width="8"/>
         <text x="425" y="250" class="svg-label">ಹಣ್ಣು</text>
       </g>
       <g id="plant-seed" class="plant-part-svg" onclick="plantPart('seed')">
         <ellipse cx="180" cy="405" rx="18" ry="11" fill="#d5a14a"/>
         <text x="115" y="440" class="svg-label">ಬೀಜ</text>
       </g>
     </svg>
     <div id="plant-focus" class="plant-focus">
       <div class="focus-icon">🌱</div>
       <h3>ಯಾವ ಭಾಗವನ್ನು ಆಯ್ಕೆ ಮಾಡುತ್ತೀರಿ?</h3>
       <p>ಗಿಡದ ಬೇರು, ಕಾಂಡ, ಎಲೆ, ಹೂವು, ಹಣ್ಣು ಅಥವಾ ಬೀಜವನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.</p>
     </div>
   </div>
 </div>`;
}
function plantPart(part){
 const data = {
   root:["🌱","ಬೇರು (Root)","ಬೇರು ಮಣ್ಣಿನ ಒಳಗೆ ಇರುತ್ತದೆ. ಇದು ಗಿಡವನ್ನು ಮಣ್ಣಿನಲ್ಲಿ ಗಟ್ಟಿಯಾಗಿ ಹಿಡಿದುಕೊಳ್ಳುತ್ತದೆ ಮತ್ತು ಮಣ್ಣಿನಿಂದ ನೀರು ಹಾಗೂ ಪೋಷಕಾಂಶಗಳನ್ನು ಹೀರಿಕೊಳ್ಳುತ್ತದೆ."],
   stem:["🌿","ಕಾಂಡ (Stem)","ಕಾಂಡವು ಗಿಡವನ್ನು ನೇರವಾಗಿ ನಿಲ್ಲಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಇದು ಬೇರುಗಳಿಂದ ಬಂದ ನೀರನ್ನು ಗಿಡದ ಬೇರೆ ಭಾಗಗಳಿಗೆ ಸಾಗಿಸುತ್ತದೆ."],
   leaf:["🍃","ಎಲೆ (Leaf)","ಎಲೆಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಹಸಿರು ಬಣ್ಣದಲ್ಲಿರುತ್ತವೆ. ಸೂರ್ಯನ ಬೆಳಕನ್ನು ಬಳಸಿ ಗಿಡಕ್ಕೆ ಆಹಾರ ತಯಾರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ."],
   flower:["🌸","ಹೂವು (Flower)","ಹೂವು ಗಿಡದ ಒಂದು ಪ್ರಮುಖ ಭಾಗ. ಕೆಲವು ಹೂವುಗಳು ನಂತರ ಹಣ್ಣು ಮತ್ತು ಬೀಜಗಳಾಗಿ ಬೆಳೆಯುತ್ತವೆ."],
   fruit:["🍎","ಹಣ್ಣು (Fruit)","ಹಣ್ಣು ಬೀಜಗಳನ್ನು ರಕ್ಷಿಸುತ್ತದೆ. ನಾವು ತಿನ್ನುವ ಅನೇಕ ಹಣ್ಣುಗಳ ಒಳಗೆ ಬೀಜಗಳು ಇರುತ್ತವೆ."],
   seed:["🌰","ಬೀಜ (Seed)","ಬೀಜದಿಂದ ಹೊಸ ಗಿಡ ಬೆಳೆಯಬಹುದು. ನೀರು, ಗಾಳಿ ಮತ್ತು ಸರಿಯಾದ ಪರಿಸರ ಸಿಕ್ಕರೆ ಬೀಜ ಮೊಳಕೆಯೊಡೆಯುತ್ತದೆ."]
 };
 document.querySelectorAll(".plant-part-svg").forEach(x=>x.classList.remove("selected"));
 const el=document.getElementById("plant-"+part);
 if(el) el.classList.add("selected");
 const d=data[part];
 document.getElementById("plant-focus").innerHTML=`<div class="focus-icon">${d[0]}</div><h3>${d[1]}</h3><p>${d[2]}</p><button onclick="showPartOnly('${part}')">🔎 ಈ ಭಾಗವನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ನೋಡಿ</button>`;
 document.getElementById("explain").innerHTML=`<strong>${d[0]} ${d[1]}</strong><br>${d[2]}`;
}
function showPartOnly(part){
 const names={root:"ಬೇರು",stem:"ಕಾಂಡ",leaf:"ಎಲೆ",flower:"ಹೂವು",fruit:"ಹಣ್ಣು",seed:"ಬೀಜ"};
 const el=document.getElementById("plant-"+part);
 document.querySelectorAll(".plant-part-svg").forEach(x=>x.classList.add("faded"));
 if(el) el.classList.remove("faded"),el.classList.add("selected");
 document.getElementById("plant-focus").scrollIntoView({behavior:"smooth",block:"center"});
 alert("🔎 "+names[part]+" ಅನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಹೈಲೈಟ್ ಮಾಡಲಾಗಿದೆ!");
}

function explain(id,i){
 const t=topics.find(x=>x.id===id),x=t.items[i];
 document.getElementById("explain").innerHTML=`<strong>${x[0]} ${x[1]} — ${x[2]}</strong><br>${x[3]}`;
}
function gameFor(t){
 if(t.id==="plants") return `<div class="game"><h2>🎮 Plant Challenge</h2><p>ಗಿಡವನ್ನು ಮಣ್ಣಿನಲ್ಲಿ ಗಟ್ಟಿಯಾಗಿ ಹಿಡಿದುಕೊಳ್ಳುವುದು ಯಾವ ಭಾಗ?</p><button onclick="answer(this,true)">🌱 ಬೇರು</button><button onclick="answer(this,false)">🍃 ಎಲೆ</button><button onclick="answer(this,false)">🌸 ಹೂವು</button></div>`;
 if(t.id==="animals") return `<div class="game"><h2>🎮 Animal Home</h2><p>🐦 ಹಕ್ಕಿಯ ಮನೆ ಯಾವುದು?</p><button onclick="answer(this,true)">🪺 ಗೂಡು</button><button onclick="answer(this,false)">🐝 ಜೇನುಗೂಡು</button><button onclick="answer(this,false)">🏠 ಕೆನಲ್</button></div>`;
 if(t.id==="senses") return `<div class="game"><h2>🎮 Guess the Sense</h2><p>🔔 ಗಂಟೆಯ ಶಬ್ದವನ್ನು ಕೇಳಲು ಯಾವ ಅಂಗ?</p><button onclick="answer(this,true)">👂 ಕಿವಿ</button><button onclick="answer(this,false)">👀 ಕಣ್ಣು</button><button onclick="answer(this,false)">👃 ಮೂಗು</button></div>`;
 if(t.id==="water") return `<div class="game"><h2>🎮 Save or Waste?</h2><p>🚰 ಹಲ್ಲುಜ್ಜುವಾಗ ಟ್ಯಾಪ್ ಮುಚ್ಚುವುದು?</p><button onclick="answer(this,true)">✅ ನೀರನ್ನು ಉಳಿಸಿ</button><button onclick="answer(this,false)">❌ ನೀರನ್ನು ವ್ಯರ್ಥ ಮಾಡಿ</button></div>`;
 return `<div class="game"><h2>🎮 Day or Night?</h2><p>⭐ ನಕ್ಷತ್ರಗಳನ್ನು ನೋಡುವುದು?</p><button onclick="answer(this,false)">☀️ ಹಗಲು</button><button onclick="answer(this,true)">🌙 ರಾತ್ರಿ</button></div>`;
}
function answer(btn,ok){btn.classList.add(ok?"correct":"wrong");alert(ok?"🎉 ಸರಿಯಾದ ಉತ್ತರ! Great job!":"😊 ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ! Try again!");}
const quizQ=[
["ಗಿಡವನ್ನು ಮಣ್ಣಿನಲ್ಲಿ ಹಿಡಿದುಕೊಳ್ಳುವ ಭಾಗ ಯಾವುದು?","ಬೇರು","ಎಲೆ","ಹೂವು"],
["🐦 ಹಕ್ಕಿಯ ಮನೆ ಯಾವುದು?","ಗೂಡು","ಕೆನಲ್","ಬಿಲ"],
["👀 ನಾವು ಯಾವುದರಿಂದ ನೋಡುತ್ತೇವೆ?","ಕಣ್ಣು","ಕಿವಿ","ಮೂಗು"],
["💧 ಗಿಡಗಳಿಗೆ ಏನು ಬೇಕು?","ನೀರು","ಕಲ್ಲು","ಆಟಿಕೆ"],
["🌙 ನಕ್ಷತ್ರಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಯಾವಾಗ ಕಾಣುತ್ತವೆ?","ರಾತ್ರಿ","ಹಗಲು","ಮಧ್ಯಾಹ್ನ"],
["🐝 ಜೇನುನೊಣದ ಮನೆ ಯಾವುದು?","ಜೇನುಗೂಡು","ಗೂಡು","ಕೆನಲ್"],
["👂 ನಾವು ಯಾವುದರಿಂದ ಕೇಳುತ್ತೇವೆ?","ಕಿವಿ","ಕಣ್ಣು","ನಾಲಿಗೆ"],
["☀️ ಹಗಲಿನಲ್ಲಿ ನಮಗೆ ಬೆಳಕು ಕೊಡುವುದು ಯಾವುದು?","ಸೂರ್ಯ","ಚಂದ್ರ","ನಕ್ಷತ್ರ"]
];
let qi=0,score=0;
function showQuiz(){qi=0;score=0;renderQ()}
function renderQ(){
 if(qi>=quizQ.length){document.getElementById("app").innerHTML=`<div class="quiz"><h1>🎉 Quiz Complete!</h1><p class="score">ನಿಮ್ಮ ಅಂಕ: ${score} / ${quizQ.length}</p><p>${score>=6?"🌟 Super Scientist!":"👏 Good try! ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ!"}</p><button class="topic-btn" onclick="showQuiz()">🔄 Play Again</button><button class="back" onclick="showHome()">🏠 Home</button></div>`;return}
 let q=quizQ[qi],opts=[q[1],q[2],q[3]].sort(()=>Math.random()-.5);
 document.getElementById("app").innerHTML=`<div class="quiz"><p>Question ${qi+1} / ${quizQ.length}</p><h2>${q[0]}</h2>${opts.map(o=>`<button class="option" onclick="quizAnswer(this,'${o.replace(/'/g,"\\'")}','${q[1].replace(/'/g,"\\'")}')">${o}</button>`).join("")}<p class="score">⭐ Score: ${score}</p></div>`;
}
function quizAnswer(btn,chosen,correct){if(chosen===correct){score++;btn.classList.add("correct")}else btn.classList.add("wrong");setTimeout(()=>{qi++;renderQ()},500)}
showHome();
