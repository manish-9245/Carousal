const wrapper = document.querySelector('.wrapper');
const images = wrapper.querySelectorAll('img');

wrapper.addEventListener('scroll', () => {
  const scrollWidth = wrapper.scrollWidth;
  const scrollLeft = wrapper.scrollLeft;
  const clientWidth = wrapper.clientWidth;

  if (scrollLeft === scrollWidth - clientWidth) {
    const clones = Array.from(images).map(image => image.cloneNode(true));
    clones.forEach(clone => wrapper.appendChild(clone));
  } else if (scrollLeft === 0) {
    const clones = Array.from(images).map(image => image.cloneNode(true));
    clones.reverse().forEach(clone => wrapper.insertBefore(clone, images[0]));
    wrapper.scrollLeft = scrollWidth - clientWidth;
  }
});
