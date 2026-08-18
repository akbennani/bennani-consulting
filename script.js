const root = document.documentElement;
const toggleBtn = document.getElementById('lang-toggle');

function setLang(lang) {
  root.setAttribute('data-lang', lang);
  root.setAttribute('lang', lang);
  localStorage.setItem('bennani-lang', lang);
}

const storedLang = localStorage.getItem('bennani-lang');
if (storedLang) {
  setLang(storedLang);
}

toggleBtn.addEventListener('click', () => {
  const nextLang = root.getAttribute('data-lang') === 'nl' ? 'en' : 'nl';
  setLang(nextLang);
});
