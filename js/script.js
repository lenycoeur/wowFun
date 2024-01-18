


const imageContainers = document.querySelectorAll('.content-image');

imageContainers.forEach((container) => {
  container.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.width / 10;
    const centerY = containerRect.height / 10;
    const moveX = (mouseX - containerRect.left - centerX) / 50; 
    const moveY = (mouseY - containerRect.top - centerY) / 50; 

    container.style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${moveY}deg) rotateY(${moveX}deg)`;
  });

  container.addEventListener('mouseleave', () => {
    container.style.transform = 'translate(0px, 0px) rotateX(0deg) rotateY(0deg)';
  });
});




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




