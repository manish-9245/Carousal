const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('scroll', () => {
  const scrollWidth = wrapper.scrollWidth;
  const scrollLeft = wrapper.scrollLeft;
  const clientWidth = wrapper.clientWidth;
  
  if (scrollLeft === scrollWidth - clientWidth) {
    const firstImage = wrapper.querySelector('img');
    wrapper.appendChild(firstImage.cloneNode(true));
    firstImage.remove();
    wrapper.scrollLeft -= clientWidth;
  }
});
