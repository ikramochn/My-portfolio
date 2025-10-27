// Simple interactions: reveal on scroll, set year, smooth nav highlight

// year
document.getElementById('year').textContent = new Date().getFullYear();

// reveal on scroll
const reveals = document.querySelectorAll('[data-animate]');
function onScrollReveal(){
  const trigger = window.innerHeight * 0.85;
  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < trigger) el.classList.add('active');
  });
}
window.addEventListener('scroll', onScrollReveal);
window.addEventListener('load', onScrollReveal);

// smooth nav active highlight
const sections = document.querySelectorAll('section, header');
const links = document.querySelectorAll('.nav-links a:not(.cta)');
function navHighlight(){
  let idx = sections.length;
  while(--idx && window.scrollY + 150 < sections[idx].offsetTop) {}
  links.forEach(l => l.classList.remove('active'));
  if(links[idx]) links[idx].classList.add('active');
}
window.addEventListener('scroll', navHighlight);
navHighlight();

// optional: simple form "send" feedback (no backend)
const form = document.querySelector('.contact-form');
if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    alert('Thanks! Your message was not actually sent (this is a demo). Replace form action to connect a backend.');
    form.reset();
  });
}

  // Set current year in copyright
        document.getElementById('year').textContent = new Date().getFullYear();
        
        // Animation on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('[data-animate]');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        };
        
        window.addEventListener('scroll', animateOnScroll);
        // Initial check
        animateOnScroll();


