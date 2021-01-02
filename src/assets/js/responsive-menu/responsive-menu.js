export {showResponsiveMenu};


function showResponsiveMenu() {
  const nav = document.getElementById('nav');
  const hamburguerButton = document.getElementById('menuOpen');
  hamburguerButton.removeEventListener('click', showResponsiveMenu);
  toggleMenuIcon();
  hamburguerButton.addEventListener("click", hideResponsiveMenu);
  nav.classList.toggle('show');
  function hideResponsiveMenu() {
    hamburguerButton.removeEventListener("click", hideResponsiveMenu);
    toggleMenuIcon();
    hamburguerButton.addEventListener("click", showResponsiveMenu);
    nav.classList.toggle('show');
  }
  function toggleMenuIcon() {
    hamburguerButton.children[0].classList.toggle('bx-x');
    hamburguerButton.children[0].classList.toggle('bx-search');
  }
}