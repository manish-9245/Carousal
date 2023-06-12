const wrapper = document.querySelector('.wrapper');
const images = wrapper.querySelectorAll('img');

const firstImage = images[0];
const lastImage = images[images.length - 1];

// Clone the first and last images
const clonedFirstImage = firstImage.cloneNode(true);
const clonedLastImage = lastImage.cloneNode(true);

// Append the cloned images before/after the original images
wrapper.insertBefore(clonedLastImage, firstImage);
wrapper.appendChild(clonedFirstImage);

wrapper.addEventListener('scroll', () => {
  const scrollWidth = wrapper.scrollWidth;
  const scrollLeft = wrapper.scrollLeft;
  const clientWidth = wrapper.clientWidth;

  if (scrollLeft === 0) {
    wrapper.scrollLeft = scrollWidth - 2 * clientWidth;
  } else if (scrollLeft === scrollWidth - clientWidth) {
    wrapper.scrollLeft = clientWidth;
  }
});
