const wrapper = document.querySelector('.wrapper');
const images = wrapper.querySelectorAll('img');
const cloneCount = 6; // Number of clones to pre-render

// Initial clones
for (let i = 0; i < cloneCount; i++) {
  const clone = images[i].cloneNode(true);
  wrapper.appendChild(clone);
}

wrapper.addEventListener('scroll', () => {
  const scrollWidth = wrapper.scrollWidth;
  const scrollLeft = wrapper.scrollLeft;
  const clientWidth = wrapper.clientWidth;
  const totalImages = images.length;

  if (scrollLeft >= scrollWidth - clientWidth * (cloneCount + 1)) {
    for (let i = 0; i < cloneCount; i++) {
      const clone = images[i].cloneNode(true);
      wrapper.appendChild(clone);
    }
  }

  // Check if there are enough clones pre-rendered ahead
  const preRenderedClones = wrapper.querySelectorAll('.clone');
  if (preRenderedClones.length < cloneCount) {
    const lastImageIndex = totalImages - cloneCount;
    const startIndex = lastImageIndex - preRenderedClones.length;
    for (let i = startIndex; i < lastImageIndex; i++) {
      const clone = images[i].cloneNode(true);
      clone.classList.add('clone');
      wrapper.insertBefore(clone, images[0]);
    }
    wrapper.scrollLeft += clientWidth * preRenderedClones.length;
  }

  // Check if clones need to be removed from the end
  const clonesToRemove = wrapper.querySelectorAll('.clone');
  if (clonesToRemove.length > cloneCount) {
    for (let i = 0; i < cloneCount; i++) {
      wrapper.removeChild(clonesToRemove[i]);
    }
    wrapper.scrollLeft -= clientWidth * cloneCount;
  }
});
