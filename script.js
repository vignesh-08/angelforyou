// LOADER
window.addEventListener('load',()=>setTimeout(()=>document.getElementById('loader').classList.add('gone'),3100));

// TICKER
(function(){
  const msgs=['Happy Birthday Abii ❤️','You make everything better 🌸','So glad you exist 💕','You deserve the whole world ✨','Missing you is now a habit 🌙','Your smile is everything 💗','Eppavum happy-ah iru 🌺','Stay beautiful, stay you 💖','Today is YOUR day 🎂','You became my favourite person 🌸','I think about you more than you know 💭','Talking to you is the best part of my day 🌟','Eppavum Unna Thaniya Vida Mattan 🌸','Enna kastam vanthalum Un Kudavey Irruppan 💖'];
  const t=document.getElementById('tkTrack');
  t.innerHTML=[...msgs,...msgs].map(m=>`<span class="tk-item">❤️ ${m}</span>`).join('');
})();

// FLOATING HEARTS
(function(){
  const c=document.getElementById('fhearts'),e=['❤️','💕','🌸','✨','💗','💖','🌺','🌷'];
  for(let i=0;i<24;i++){const h=document.createElement('div');h.className='fh';h.textContent=e[~~(Math.random()*e.length)];h.style.cssText=`left:${Math.random()*100}%;animation-duration:${7+Math.random()*9}s;animation-delay:${Math.random()*12}s;font-size:${.7+Math.random()*1.1}rem;`;c.appendChild(h);}
})();

// PETALS
(function(){
  const cv=document.getElementById('petalCanvas'),ctx=cv.getContext('2d');let W,H,P=[];
  const rsz=()=>{W=cv.width=window.innerWidth;H=cv.height=window.innerHeight;};rsz();window.addEventListener('resize',rsz);
  class Petal{constructor(){this.r();}r(){this.x=Math.random()*W;this.y=-25;this.s=7+Math.random()*9;this.vy=.8+Math.random()*1.8;this.vx=(Math.random()-.5)*1.2;this.rot=Math.random()*Math.PI*2;this.rs=(Math.random()-.5)*.035;this.op=.12+Math.random()*.28;this.c=Math.random()>.5?'#f4a7c0':'#c9b8f0';}u(){this.y+=this.vy;this.x+=this.vx;this.rot+=this.rs;if(this.y>H+25)this.r();}d(){ctx.save();ctx.translate(this.x,this.y);ctx.rotate(this.rot);ctx.globalAlpha=this.op;ctx.fillStyle=this.c;ctx.beginPath();ctx.ellipse(0,0,this.s*.5,this.s,0,0,Math.PI*2);ctx.fill();ctx.restore();}}
  for(let i=0;i<30;i++) P.push(new Petal());
  (function loop(){ctx.clearRect(0,0,W,H);P.forEach(p=>{p.u();p.d();});requestAnimationFrame(loop);})();
})();

// GALLERY
const galleryImages=[
  'images/1.jpeg','images/2.jpeg','images/3.png','images/4.png','images/5.jpeg','images/6.png',
  'images/7.png','images/8.png','images/9.png','images/10.png','images/11.png','images/12.png',
  'images/13.png','images/14.png','images/15.png','images/16.png','images/17.png','images/18.png',
  'images/19.png','images/20.png','images/21.png','images/22.png','images/23.png','images/24.png',
  'images/25.jpeg','images/26.jpeg','images/27.jpeg','images/28.jpeg','images/29.jpeg','images/30.jpeg',
  'images/31.jpeg','images/32.jpeg','images/33.jpeg','images/34.jpeg','images/35.jpeg','images/36.jpeg'
];
const galleryCaptions=[
  'Every moment with you matters 🌸','Smiles that light up everything 💕','Our favourite kind of day ✨',
  'A memory I never want to forget 🌺','The way you laughed... 💗','Simply beautiful, just like you 🌷',
  'Your eyes hold the sweetest stories 🌙','When you’re near, my heart whispers calm ❤️','You make ordinary feel magical ✨',
  'I love the warmth of your presence 💖','Your smile is my favourite sunrise 🌅','Every second with you feels precious 💫',
  'I carry your laughter inside me 🌟','You are my sweetest daydream 🌸','Your voice is my favourite sound 🎶',
  'Loving you feels like coming home 🏡','You are the blossom in my quiet heart 🌹','Being with you is pure poetry ✍️',
  'Your kindness makes my world soft 💭','I think of you in every happy moment 😊','Your tenderness is my gentle strength 🤍',
  'When you smile, the stars feel closer ✨','You are my quiet miracle 💐','With you, I believe in magic 🌠',
  'Your love is the colour of my happiest days 🌈','I miss you before we even part 💌','Your presence heals my restless thoughts 🌙',
  'My heart keeps finding new reasons for you 💘','Every day with you becomes my favourite 💞','Your beauty lives in every small detail 🌿',
  'Your warmth is the shelter I seek 🌤️','You make even silence feel warm 💕','Your laughter is the song I chase 🎵',
  'I love how you simply are, always 🌟','You are the sweetest story I know 🌺','Just thinking of you makes me smile 💕'
];
const gg=document.getElementById('galGrid');
const moreMemBtn=document.getElementById('moreMemBtn');
let moreLoaded=false;
function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function renderGallery(images){gg.innerHTML='';images.forEach((src,i)=>{const caption=galleryCaptions[i]||`More memory ${i-5}`;const c=document.createElement('div');c.className='gcard';c.innerHTML=`<img src="${src}" alt="${caption}"><div class="gcard-ov"><div class="gcard-cap">${caption}</div></div>`;c.addEventListener('click',()=>{const lbImg=document.getElementById('lb-img');lbImg.src=src;lbImg.alt=caption;document.getElementById('lb-cap').textContent=caption;document.getElementById('lightbox').classList.add('on');});gg.appendChild(c);});}
function showMoreMemories(){if(moreLoaded)return;moreLoaded=true;const extra=shuffle(galleryImages.slice(6));renderGallery(galleryImages.slice(0,6).concat(extra));moreMemBtn.style.display='none';}
moreMemBtn.addEventListener('click',showMoreMemories);
renderGallery(galleryImages.slice(0,6));
function closeLB(){document.getElementById('lightbox').classList.remove('on');}
document.getElementById('lightbox').addEventListener('click',function(e){if(e.target===this)closeLB();});
document.getElementById('lb-close').addEventListener('click',closeLB);

// SCROLL OBSERVER
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on');}),{threshold:.12});

// REASONS
[{i:'😊',t:"Your smile fixes my mood without even trying."},{i:'💬',t:"Talking to you makes my whole day better."},{i:'🌙',t:"You became important without me realizing it."},{i:'🤍',t:"Even silence feels different when it's with you."},{i:'✨',t:"You make ordinary moments feel like something more."},{i:'💕',t:"The way you are — effortlessly, beautifully you."}].forEach((r,i)=>{const c=document.createElement('div');c.className='rcard';c.style.transitionDelay=(i*.1)+'s';c.innerHTML=`<div class="ri">${r.i}</div><div class="rt">${r.t}</div>`;document.getElementById('rGrid').appendChild(c);obs.observe(c);});

// TIMELINE
document.querySelectorAll('.tcard').forEach((el,i)=>{el.style.transitionDelay=(i*.13)+'s';obs.observe(el);});
obs.observe(document.querySelector('.tl-wrap'));

// LETTER
const lTxt=`Abii ❤️

Many more happy returns of the day…

Eppavum happy-ah iru.

Na unna eppavum marakka maattan.

You walked into my life quietly —
and somehow became the loudest thought in my mind.

There are lots of things I want to say,
but words always fall short when talk to you.
When you stay away, my heart feels the distance.
I miss you, I miss the warmth of your attention.

I want you to know how much I love you,
and how much it hurts when I feel ignored.

So let this little world made just for you —
I can't think how I live whithout You !

You deserve every happiness in this world.
Every laugh. Every good morning.
Every peaceful, beautiful moment.

Thank you for existing.
For being you.

With all my heart,
Someone who cares more than they show. 💕`;
let li=0,lEl=document.getElementById('typed-letter'),lDone=false;
function typeL(){if(li<lTxt.length){lEl.textContent+=lTxt[li];li++;setTimeout(typeL,lTxt[li-1]==='\n'?130:38);}}
new IntersectionObserver(es=>{if(es[0].isIntersecting&&!lDone){lDone=true;setTimeout(typeL,600);}} ,{threshold:.2}).observe(document.getElementById('letter'));

// CANDLE
let blown=false;
let wishInterval=null;
const wishes=["May all your dreams come true 🌸","Wishing you endless happiness 💕","May this year bring love & joy ✨","You deserve the very best, Abii 💖","May every day feel as magical as today 🌺","May all your silent wishes come true 🌙"];
function setRandomWish(){const wm=document.getElementById('wish-msg');wm.textContent=wishes[Math.floor(Math.random()*wishes.length)];}
function blowCandle(){
  if(blown)return;blown=true;
  document.getElementById('flame').classList.add('out');
  document.getElementById('smoke').style.display='block';
  const wm=document.getElementById('wish-msg');
  setRandomWish();
  setTimeout(()=>wm.classList.add('show'),500);
  wishInterval=setInterval(setRandomWish,5000);
  launchConfetti();
}

// CONFETTI
function launchConfetti(){
  const cols=['#f4a7c0','#c9b8f0','#ffd6e7','#ffffff','#ffaa99','#9b8ec4'];
  for(let i=0;i<70;i++){
    const d=document.createElement('div');d.className='cfp';
    const size=5+Math.random()*8;
    d.style.cssText=`left:${Math.random()*100}vw;background:${cols[~~(Math.random()*cols.length)]};width:${size}px;height:${size}px;border-radius:${Math.random()>.5?'50%':'2px'};animation-duration:${2+Math.random()*2}s;animation-delay:${Math.random()*.6}s;`;
    document.body.appendChild(d);setTimeout(()=>d.remove(),4800);
  }
}

// QUIZ
const qData=[
  {q:"What's the one thing about you that I think about most?",opts:["Your smile 😊","Your voice 🎵","Your laugh 😄","Your vibe ✨"],right:0,r:"Your smile… it literally lives in my head rent-free. 💕"},
  {q:"What do I secretly wish every night before I sleep?",opts:["To talk to you 🌙","To see you soon 🌸","That you're happy 💗","All of the above ✨"],right:3,r:"All of the above — always, every single night. 🌙"},
  {q:"How do I feel when you don't reply for a long time?",opts:["Confused 🤔","Worried 💭","I miss you terribly 💔","All of these 🥺"],right:3,r:"All of these at once. It hurts every time I feel ignored. 🥺"},
  {q:"What's my favourite thing about you?",opts:["How you talk 💬","Your energy 🌟","How you make me feel 💕","Everything 😊"],right:3,r:"Everything about you is my favourite thing. 💕"},
];
let qIdx=0;
function renderQ(){
  if(qIdx>=qData.length){document.getElementById('qQ').textContent='';document.getElementById('qOpts').innerHTML='';const r=document.getElementById('qRes');r.textContent='You already are the answer to everything, Abii 💕';r.classList.add('show');return;}
  const q=qData[qIdx],qQ=document.getElementById('qQ'),qO=document.getElementById('qOpts'),qP=document.getElementById('qProg');
  qQ.textContent=q.q;qO.innerHTML='';qP.innerHTML='';
  qData.forEach((_,i)=>{const d=document.createElement('div');d.className='qp-dot'+(i<qIdx?' done':'');qP.appendChild(d);});
  q.opts.forEach((o,i)=>{const b=document.createElement('div');b.className='quiz-opt';b.textContent=o;b.addEventListener('click',()=>{document.querySelectorAll('.quiz-opt').forEach(x=>x.classList.remove('chosen'));b.classList.add('chosen');const r=document.getElementById('qRes');r.textContent=q.r;r.classList.add('show');setTimeout(()=>{r.classList.remove('show');qIdx++;setTimeout(renderQ,400);},2400);});qO.appendChild(b);});
}
new IntersectionObserver(es=>{if(es[0].isIntersecting){this.disconnect&&this.disconnect();renderQ();}},{threshold:.3}).observe(document.getElementById('quiz'));

// LOVE NOTES
[{e:'🌙',t:"I stay up thinking about our conversations",r:'-2deg'},{e:'💌',t:"Every 'hii' from you brightens my whole day",r:'1.5deg'},{e:'🌸',t:"I notice the little things you do and love them",r:'-1deg'},{e:'🌟',t:"You don't know how often I think of you",r:'2deg'},{e:'🎵',t:"Some songs remind me of you now",r:'-1.5deg'},{e:'🥺',t:"Sometimes when you avoid me, it feels like a small ache in my chest",r:'1deg'},{e:'💭',t:"I wish I could tell you all of this out loud",r:'-1deg'}].forEach((n,i)=>{const d=document.createElement('div');d.className='note';d.style.cssText=`--r:${n.r};transition-delay:${i*.12}s;`;d.innerHTML=`<span class="note-emoji">${n.e}</span><div class="note-text">${n.t}</div>`;document.getElementById('notesGrid').appendChild(d);obs.observe(d);});

// FEEDBACK STORAGE
const feedbackInput=document.getElementById('feedbackInput');
const feedbackSend=document.getElementById('feedbackSend');
const feedbackMsg=document.getElementById('feedbackMsg');

function getFeedbackData(){try{return JSON.parse(localStorage.getItem('angelFeedbacks')||'[]');}catch(e){return [];}}
function saveFeedbackData(entry){const data=getFeedbackData();data.push(entry);localStorage.setItem('angelFeedbacks',JSON.stringify(data));}

feedbackSend.addEventListener('click',()=>{const text=feedbackInput.value.trim();if(!text){feedbackMsg.textContent='Please type How you feel and tell me your wish !';feedbackMsg.classList.add('error');feedbackMsg.classList.remove('success');return;}saveFeedbackData({text,created:new Date().toISOString()});feedbackInput.value='';feedbackMsg.textContent='Sent! Thank you for sharing. 💖';feedbackMsg.classList.add('success');feedbackMsg.classList.remove('error');setTimeout(()=>{feedbackMsg.textContent='';},3200);});

// PROMISES
[{i:'🤝',t:'I promise to always be someone you can count on, no matter what.'},{i:'🌙',t:"I promise to check on you on your hard days, even when you say you're fine."},{i:'😊',t:'I promise to keep making you smile in my own quiet, silly ways.'},{i:'🤐',t:'I promise to keep every secret you trust me with, always.'},{i:'💕',t:"I promise my feelings for you are real — honest, quiet, and genuine."},{i:'🌸',t:'I promise to always wish the very best for you, even from afar.'},{i:'🥺',t:'I promise to be patient with your space, even when it hurts, because I care about you more than my own comfort.'},{i:'💔',t:'I promise to keep loving you even when silence feels hard, because you matter that much.'}].forEach((p,i)=>{const d=document.createElement('div');d.className='p-item';d.style.transitionDelay=(i*.12)+'s';d.innerHTML=`<div class="p-icon">${p.i}</div><div class="p-text">${p.t}</div>`;document.getElementById('pList').appendChild(d);obs.observe(d);});

// STARS
(function(){
  const cv=document.getElementById('starCanvas'),ctx=cv.getContext('2d');let W,H,S=[];
  const rsz=()=>{const p=cv.parentElement;W=cv.width=p.offsetWidth;H=cv.height=p.offsetHeight;};rsz();window.addEventListener('resize',rsz);
  class Star{constructor(){this.r();}r(){this.x=Math.random()*W;this.y=Math.random()*H;this.rad=Math.random()*1.5+.3;this.sp=.004+Math.random()*.007;this.a=Math.random()*Math.PI*2;this.base=.2+Math.random()*.55;this.c=Math.random()>.6?'#f4a7c0':Math.random()>.5?'#c9b8f0':'#fff';}u(){this.a+=this.sp;this.op=this.base+Math.sin(this.a)*.3;}d(){ctx.beginPath();ctx.arc(this.x,this.y,this.rad,0,Math.PI*2);ctx.fillStyle=this.c;ctx.globalAlpha=this.op;ctx.fill();}}
  for(let i=0;i<220;i++) S.push(new Star());
  (function loop(){ctx.clearRect(0,0,W,H);S.forEach(s=>{s.u();s.d();});requestAnimationFrame(loop);})();
})();

// MUSIC
const mBtn=document.getElementById('mBtn');
const audio=document.getElementById('bgAudio');
audio.volume=0.3;let playing=false;
mBtn.addEventListener('click',()=>{if(playing){audio.pause();mBtn.classList.add('paused');}else{audio.play().catch(()=>{});mBtn.classList.remove('paused');}playing=!playing;});

const ADMIN_USER='admin';
const ADMIN_PASS='birthday2026';
const AUTH_KEY='angelAdminAuth';
const adminOverlay=document.getElementById('adminOverlay');
const adminAuthCard=document.getElementById('adminAuthCard');
const adminPanel=document.getElementById('adminPanel');
const adminId=document.getElementById('adminId');
const adminPw=document.getElementById('adminPw');
const authMsg=document.getElementById('authMsg');
const loginBtn=document.getElementById('loginBtn');
const refreshBtn=document.getElementById('refreshBtn');
const clearBtn=document.getElementById('clearBtn');
const logoutBtn=document.getElementById('logoutBtn');
const feedbackList=document.getElementById('feedbackList');

function openAdmin(){adminOverlay.classList.add('on');if(isAuthenticated()){setAdminAuth(true);loadAdminFeedback();}else{setAdminAuth(false);adminId.focus();}}
function closeAdmin(){adminOverlay.classList.remove('on');}
function showAdminSection(show){adminAuthCard.style.display=show?'none':'block';adminPanel.style.display=show?'block':'none';}
function setAdminAuth(valid){if(valid){sessionStorage.setItem(AUTH_KEY,'true');}else{sessionStorage.removeItem(AUTH_KEY);}showAdminSection(valid);}
function isAuthenticated(){return sessionStorage.getItem(AUTH_KEY)==='true';}
function loadAdminFeedback(){const raw=localStorage.getItem('angelFeedbacks');let data=[];try{data=JSON.parse(raw)||[]}catch(e){data=[];}
 feedbackList.innerHTML='';
 if(!data.length){feedbackList.innerHTML='<div class="empty">No feedback submitted yet.</div>';return;}
 data.slice().reverse().forEach(entry=>{const item=document.createElement('div');item.className='feedback-item';const time=new Date(entry.created||Date.now()).toLocaleString();item.innerHTML=`<time>${time}</time><p>${entry.text.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</p>`;feedbackList.appendChild(item);});
}
function adminLogin(){const id=adminId.value.trim();const pw=adminPw.value.trim();if(id===ADMIN_USER&&pw===ADMIN_PASS){authMsg.textContent='Login successful.';authMsg.style.color='#a8ffbd';setAdminAuth(true);loadAdminFeedback();}else{authMsg.textContent='ID or password is incorrect.';authMsg.style.color='#ffadad';}}
loginBtn.addEventListener('click',adminLogin);
adminPw.addEventListener('keyup',e=>{if(e.key==='Enter')adminLogin();});
refreshBtn.addEventListener('click',loadAdminFeedback);
clearBtn.addEventListener('click',()=>{if(confirm('Clear all submitted feedback?')){localStorage.removeItem('angelFeedbacks');loadAdminFeedback();}});
logoutBtn.addEventListener('click',()=>{setAdminAuth(false);adminId.value='';adminPw.value='';authMsg.textContent='';});
if(isAuthenticated()){setAdminAuth(true);}

const adminBtn=document.getElementById('adminBtn');
adminBtn.addEventListener('click',openAdmin);

// SECRET
function showSecret(){document.getElementById('secretPopup').classList.add('on');launchConfetti();}
function hideSecret(){document.getElementById('secretPopup').classList.remove('on');}
document.getElementById('secretPopup').addEventListener('click',function(e){if(e.target===this)hideSecret();});