const toggleButton = document.getElementById('toggle-dark-mode');

// Função para aplicar o tema com base na preferência salva
function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

// Obtenha a preferência salva no localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// Adicione o evento de clique no botão
toggleButton.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  const newTheme = isDarkMode ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
});
const form = document.getElementById('emailForm');
    const savedEmailDisplay = document.getElementById('savedEmail');

    // Mostrar o e-mail salvo (se existir)
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
      savedEmailDisplay.textContent = `E-mail salvo: ${savedEmail}`;
    }

    // Salvar o e-mail ao enviar o formulário
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = form.email.value;

      localStorage.setItem('email', email);
      savedEmailDisplay.textContent = `E-mail salvo: ${email}`;
      alert('E-mail salvo com sucesso!');
    });