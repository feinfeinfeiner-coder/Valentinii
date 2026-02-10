const startKnop = document.getElementById('startKnop');
const vraagMaarKnop = document.getElementById('vraagMaarKnop');
const stoutJaKnop = document.getElementById('stoutJaKnop');
const finaleJa = document.getElementById('finaleJa');

const neeKnop2 = document.getElementById('neeKnop2'); 
const neeKnop4 = document.getElementById('neeKnop4'); 

const scherm1 = document.getElementById('scherm1');
const scherm2 = document.getElementById('scherm2');
const scherm3 = document.getElementById('scherm3');
const scherm4 = document.getElementById('scherm4');
const scherm5 = document.getElementById('scherm5');

function springWeg(knop) {
    if (!knop) return;
    const x = Math.random() * (window.innerWidth - knop.offsetWidth - 50);
    const y = Math.random() * (window.innerHeight - knop.offsetHeight - 50);
    knop.style.position = 'fixed';
    knop.style.left = `${x}px`;
    knop.style.top = `${y}px`;
}

// Spring-event en foto-verandering (huilende gif) voor de laatste nee-knop
if (neeKnop4) {
    neeKnop4.addEventListener('mouseenter', () => {
        springWeg(neeKnop4);

        const finaleFoto = scherm4.querySelector('.hoofdfoto');
        const origineleFoto = "https://i.pinimg.com/736x/be/e0/66/bee066141d034c7949217841e615c73a.jpg";
        const huilendeGif = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3IyejV2M2E5Z29xcXh5NW9ldmt0OWV1bWtqM2d4Z21yY2psb2lvNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wr7oA0rSjnWuiLJOY5/giphy.gif";

        finaleFoto.src = huilendeGif;

        setTimeout(() => {
            finaleFoto.src = origineleFoto;
        }, 1000);
    });
}

// Navigatie logica
startKnop.addEventListener('click', () => {
    scherm1.style.display = 'none';
    scherm2.style.display = 'flex';
});

neeKnop2.addEventListener('click', () => {
    scherm2.style.display = 'none';
    scherm3.style.display = 'flex';
});

vraagMaarKnop.addEventListener('click', () => {
    scherm2.style.display = 'none';
    scherm4.style.display = 'flex';
});

stoutJaKnop.addEventListener('click', () => {
    scherm3.style.display = 'none';
    scherm4.style.display = 'flex';
});

// De grote finale: naar het Victory scherm met confetti!
finaleJa.addEventListener('click', () => {
    scherm4.style.display = 'none';
    scherm5.style.display = 'flex';

    // Confetti afschieten
    var end = Date.now() + (5 * 1000); // 5 seconden lang

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff4d6d', '#ffffff', '#ffb3c1']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff4d6d', '#ffffff', '#ffb3c1']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
});