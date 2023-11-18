const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const secondDigit = document.querySelector('.bgnumber .second');

let currentSectionIndex = 0;

function updateNumber(newIndex) {
    const newNumber = `${newIndex + 1}`.padStart(2);
    const currentNumber = newNumber[1];

    secondDigit.textContent = currentNumber;
    currentSectionIndex = newIndex;
}

function checkSectionInView() {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            updateNumber(index);
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
}

window.addEventListener('scroll', () => {
    checkSectionInView();
});

window.addEventListener('load', () => {
    checkSectionInView();
});

navLinks.forEach((link, index) => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });

            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
            updateNumber(index);
        }
    });
});
