// === LOADER ===
const loaderName = document.getElementById('loader-name');
const loaderFill = document.getElementById('loader-fill');
const loaderPct = document.getElementById('loader-pct');
const loader = document.getElementById('loader');
const name = 'SHAKTI';
let charIdx = 0, pct = 0;
const nameInterval = setInterval(() => {
  if(charIdx <= name.length){ loaderName.textContent = name.substring(0, charIdx++); }
},80);
const pctInterval = setInterval(() => {
  pct = Math.min(pct + Math.random()*4, 100);
  loaderFill.style.width = pct + '%';
  loaderPct.textContent = Math.floor(pct) + '%';
  if(pct >= 100){
    clearInterval(pctInterval);
    clearInterval(nameInterval);
    setTimeout(() => { loader.classList.add('hidden'); startAnimations(); }, 300);
  }
},50);

// === CURSOR ===
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; cursor.style.left=mx+'px'; cursor.style.top=my+'px'; });
function animateRing(){
  rx += (mx-rx)*0.1; ry += (my-ry)*0.1;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(animateRing);
}
animateRing();
document.querySelectorAll('a,button,.project-row,.about-card,.contact-link,.skill-card,.github-badge,.form-input,.form-textarea,.form-submit').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.style.width='20px'; cursor.style.height='20px'; ring.style.width='60px'; ring.style.height='60px'; ring.style.borderColor='#C8FF00'; });
  el.addEventListener('mouseleave', () => { cursor.style.width='12px'; cursor.style.height='12px'; ring.style.width='40px'; ring.style.height='40px'; ring.style.borderColor='#0A0A0F'; });
});

// === HERO CANVAS ===
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
function resizeCanvas(){ canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
for(let i=0;i<80;i++){
  particles.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, vx:(Math.random()-0.5)*0.3, vy:(Math.random()-0.5)*0.3, size: Math.random()*1.5+0.5, opacity: Math.random()*0.4+0.1 });
}
let mouseX=canvas.width/2, mouseY=canvas.height/2;
canvas.addEventListener('mousemove', e => { const r=canvas.getBoundingClientRect(); mouseX=e.clientX-r.left; mouseY=e.clientY-r.top; });
function drawParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach((p,i) => {
    const dx=mouseX-p.x, dy=mouseY-p.y, dist=Math.sqrt(dx*dx+dy*dy);
    if(dist<120){ p.vx+=dx*0.0002; p.vy+=dy*0.0002; }
    p.x+=p.vx; p.y+=p.vy;
    p.vx*=0.99; p.vy*=0.99;
    if(p.x<0) p.x=canvas.width; if(p.x>canvas.width) p.x=0;
    if(p.y<0) p.y=canvas.height; if(p.y>canvas.height) p.y=0;
    ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fillStyle=`rgba(10,10,15,${p.opacity})`; ctx.fill();
    particles.forEach((p2,j) => {
      if(j<=i) return;
      const dx2=p.x-p2.x, dy2=p.y-p2.y, d=Math.sqrt(dx2*dx2+dy2*dy2);
      if(d<100){ ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(p2.x,p2.y); ctx.strokeStyle=`rgba(10,10,15,${0.08*(1-d/100)})`; ctx.lineWidth=0.5; ctx.stroke(); }
    });
  });
  requestAnimationFrame(drawParticles);
}

// === TYPING HERO ===
function typeHero(){
  const el = document.getElementById('typed-title');
  const text = 'SHAKTI';
  let i=0;
  const t = setInterval(()=>{ el.textContent = text.substring(0,i++); if(i>text.length) clearInterval(t); },100);
}

// === COUNT UP ===
function animateCounters(){
  document.querySelectorAll('.count-up').forEach(el => {
    const target = parseInt(el.dataset.target);
    const dur = 1500;
    const start = performance.now();
    function update(now){
      const p = Math.min((now-start)/dur,1);
      const ease = 1-Math.pow(1-p,3);
      el.textContent = Math.floor(ease*target);
      if(p<1) requestAnimationFrame(update);
      else el.textContent = target;
    }
    requestAnimationFrame(update);
  });
}

// === SCROLL REVEAL & NAV ACTIVE ===
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e,i) => {
    if(e.isIntersecting){ 
      setTimeout(()=>e.target.classList.add('up'), i*100); 
      revealObs.unobserve(e.target);
      const id = e.target.id;
      if(id){
        document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
        const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);
        if(navLink) navLink.classList.add('active');
      }
    }
  });
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Counter observer
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ animateCounters(); counterObs.disconnect(); } });
},{threshold:0.5});
const statBar = document.querySelector('.stat-bar');
if(statBar) counterObs.observe(statBar);

// === SKILLS FILTER ===
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.skill-card').forEach(card => {
      if(filter==='all'||card.dataset.cat===filter){ 
        card.style.display=''; card.style.opacity='1'; card.style.transform=''; 
      }
      else { card.style.opacity='0.3'; card.style.transform='scale(0.95)'; }
    });
  });
});

// === THEME TOGGLE ===
const themes = ['dark', 'light', 'neon'];
let currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function updateThemeIcon(){
  if(currentTheme === 'dark'){
    themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
  } else if(currentTheme === 'light'){
    themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
  } else {
    themeIcon.innerHTML = '<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/><circle cx="12" cy="12" r="4"/>';
  }
}
updateThemeIcon();

themeToggle.addEventListener('click', () => {
  const idx = themes.indexOf(currentTheme);
  currentTheme = themes[(idx + 1) % themes.length];
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  updateThemeIcon();
  themeIcon.style.transform = 'rotate(180deg)';
  setTimeout(() => themeIcon.style.transform = '', 300);
});

// === SCROLL PROGRESS ===
const progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.transform = `scaleX(${scrolled / 100})`;
});

// === PROJECT CARD 3D HOVER ===
document.querySelectorAll('.project-row.glass-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  });
});

// === KEYBOARD NAVIGATION ===
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});
document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-nav');
});

// === MOBILE NAV TOGGLE ===
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const spans = navToggle.querySelectorAll('span');
  if(navLinks.classList.contains('active')){
    spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '1';
    spans[2].style.transform = '';
  }
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '1';
    spans[2].style.transform = '';
  });
});

// === CONTACT FORM HANDLING (FIXED) ===
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const formSubmit = document.getElementById('formSubmit');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const originalText = formSubmit.innerHTML;
  formSubmit.disabled = true;
  formSubmit.innerHTML = 'Sending... <span class="arr">↗</span>';

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      formSuccess.classList.add('show');
      contactForm.reset();

      setTimeout(() => {
        formSuccess.classList.remove('show');
      }, 5000);
    } else {
      throw new Error("Form failed");
    }

  } catch (error) {
    alert("Something went wrong. Please try again.");
  } finally {
    formSubmit.disabled = false;
    formSubmit.innerHTML = originalText;
  }
});

// === TESTIMONIAL AUTO-SCROLL ===
const track = document.querySelector('.testimonial-track');
if(track){
  let isDown = false, startX, scrollLeft;
  track.addEventListener('mousedown', (e) => { isDown = true; startX = e.pageX - track.offsetLeft; scrollLeft = track.scrollLeft; });
  track.addEventListener('mouseleave', () => isDown = false);
  track.addEventListener('mouseup', () => isDown = false);
  track.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
  });
}

// === START ANIMATIONS ===
function startAnimations(){
  drawParticles();
  typeHero();
}

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});