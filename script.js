
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Modo Escuro';
darkModeToggle.classList.add('dark-mode-btn');
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
});


let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); 
}

// Validação de formulário
function validateForm() {
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value;
    if (name == "" || email == "") {
        alert("Nome e Email são obrigatórios!");
        return false;
    }
    return true;
}
