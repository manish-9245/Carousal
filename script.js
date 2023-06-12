const wrapper = document.querySelector('.wrapper');
const images = wrapper.querySelectorAll('img');

let isTransitioning = false;

// Clone the first image and append it to the end
const firstImage = images[0].cloneNode(true);
wrapper.appendChild(firstImage);

wrapper.addEventListener('scroll', () => {
  if (isTransitioning) return;

  const scrollWidth = wrapper.scrollWidth;
  const scrollLeft = wrapper.scrollLeft;
  const clientWidth = wrapper.clientWidth;
  
  if (scrollLeft === scrollWidth - clientWidth) {
    isTransitioning = true;

    wrapper.style.scrollBehavior = 'auto';
    wrapper.scrollLeft = 0;

    setTimeout(() => {
      wrapper.style.scrollBehavior = 'smooth';
      wrapper.appendChild(images[0].cloneNode(true));
      images[0].remove();
      isTransitioning = false;
    }, 100);
  }
});
