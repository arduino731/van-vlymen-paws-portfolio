const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e){
//   console.log(e)
  sliderImages.forEach(slideImage => {
      const slide = window.scrollY + window.innerHeight - slideImage.height;
      // bottom of the image
      const imageBottom = slideImage.offsetTop + slideImage.height;
      const isHalfShown = slide > slideImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        slideImage.classList.add('active-slide-in');
      } else {
        slideImage.classList.remove('active-slide-in');
      }
  })
}

window.addEventListener('scroll', checkSlide);