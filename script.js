const wrapper = document.querySelector('.wrapper');
const images = wrapper.querySelectorAll('img');
const cloneCount = 3; // Number of clones to add

wrapper.addEventListener('scroll', () => {
  const scrollWidth = wrapper.scrollWidth;
  const scrollLeft = wrapper.scrollLeft;
  const clientWidth = wrapper.clientWidth;
  const totalImages = images.length;

  if (scrollLeft >= (totalImages - cloneCount) * clientWidth) {
    for (let i = 0; i < cloneCount; i++) {
      const clone = images[i].cloneNode(true);
      wrapper.appendChild(clone);
    }
  }
});

// Initial clones
for (let i = 0; i < cloneCount; i++) {
  const clone = images[totalImages - 1 - i].cloneNode(true);
  wrapper.insertBefore(clone, images[0]);
}
