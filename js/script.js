
const icons = document.querySelectorAll('.icon');
const contentImages = document.querySelectorAll('.content-image');
const contentTexts = document.querySelectorAll('.content-text');
const defaultIcon = document.querySelector('.icon[data-index="1"]');


icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    const index = icon.getAttribute('data-index');
    contentImages.forEach((img) => img.style.display = 'none');
    contentTexts.forEach((text) => text.style.display = 'none');
    document.querySelector(`.content-image[data-index="${index}"]`).style.display = 'block';
    document.querySelector(`.content-text[data-index="${index}"]`).style.display = 'block';
    icons.forEach((i) => i.classList.remove('selected'));
    icon.classList.add('selected');
  });
});

if (defaultIcon) {
  defaultIcon.click();
}



const burgerIcon = document.querySelectorAll('.burger-button i')
const burgerButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.burger-menu');

burgerButton.onclick = function () {
    burgerMenu.classList.toggle('openmenu')
    const isOpen = burgerMenu.classList.contains('openmenu')
    burgerIcon.classList = isOpen ? "fas fa-xmark" : "fas fa-bars";
  }




