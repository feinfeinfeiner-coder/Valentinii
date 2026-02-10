// Pak de elementen vast uit de HTML
const startKnop = document.getElementById('startKnop');
const neeKnop1 = document.getElementById('neeKnop'); // De 'ne' knop van scherm 1
const neeKnop2 = document.getElementById('neeKnop2'); // De 'ne' knop van scherm 2
const scherm1 = document.getElementById('scherm1');
const scherm2 = document.getElementById('scherm2');

// Functie om een knop naar een willekeurige plek te sturen
function springWeg(knop) {
    if (!knop) return; // Veiligheid: stop als de knop niet bestaat

    // Bereken willekeurige positie binnen het venster
    const x = Math.random() * (window.innerWidth - knop.offsetWidth - 50);
    const y = Math.random() * (window.innerHeight - knop.offsetHeight - 50);

    // Verplaats de knop
    knop.style.position = 'fixed'; // Zorgt dat hij echt overal kan springen
    knop.style.left = `${x}px`;
    knop.style.top = `${y}px`;
}

// Event listener voor de eerste 'ne' knop
if (neeKnop1) {
    neeKnop1.addEventListener('mouseenter', () => {
        springWeg(neeKnop1);
    });
}

// Event listener voor de tweede 'ne' knop (op scherm 2)
if (neeKnop2) {
    neeKnop2.addEventListener('mouseenter', () => {
        springWeg(neeKnop2);
    });
}

// Actie voor de 'heyyheyyy' knop (wissel naar scherm 2)
if (startKnop) {
    startKnop.addEventListener('click', () => {
        scherm1.style.display = 'none';
        scherm2.style.display = 'flex'; // Gebruik flex om het weer te centreren
    });
}

// Actie voor de JA-knop op scherm 2
const jaKnop = document.getElementById('jaKnop');
if (jaKnop) {
    jaKnop.addEventListener('click', () => {
        alert("YAY! ❤️");
        // Hier kunnen we later de confetti toevoegen!
    });
}