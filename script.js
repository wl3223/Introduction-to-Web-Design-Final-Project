const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 0 16px rgba(0, 0, 0, 0.8)';
        card.style.transform = 'translateY(-4px)';
        card.style.transition = 'box-shadow 0.2s ease, transform 0.2s ease';
    });

    card.addEventListener('mouseout', () => {
        card.style.boxShadow = '';
        card.style.transform = '';
    });
});



const audio = document.querySelector('.audio-section audio');
const audioSection = document.querySelector('.audio-section');

if (audio && audioSection) {
let messageShown = false;

audio.addEventListener('play', () => {
    if (messageShown) {
        return;
    }

    const p = document.createElement('p');
    p.textContent = 'Have a nice day!';
    p.style.marginTop = '0.5rem';
    p.style.opacity = '0.9';

    audioSection.appendChild(p);

    messageShown = true;
});
};


