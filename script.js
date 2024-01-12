// Add this JavaScript for the slideshow functionality
document.addEventListener('DOMContentLoaded', function () {
    // Get slideshow container and slides
    const slideshowContainer = document.querySelector('.slideshow-container');
    const slides = document.querySelector('.slideshow-section');
    const description = document.querySelector('.description-section');
  
    // Set initial slide index
    let slideIndex = 0;
  
    // Function to show the current slide
    function showSlide(index) {
      slides.style.transform = `translateX(${-index * 100}%)`;
    }
  
    // Function to show the description for the current slide
    function showDescription(index) {
      description.innerHTML = `<p>${getSlideDescription(index)}</p>`;
    }
  
    // Function to get the description for each slide
    function getSlideDescription(index) {
      // Add descriptions for each slide here
      const descriptions = [
        'Cigar accessories',
        'Cigar Lounge',
        'Cigar lounge interior',
        'Cigar lounge event',
        'People at a cigar event',
      ];
  
      return descriptions[index];
    }
  
    // Function to change to the next slide
    function nextSlide() {
      slideIndex = (slideIndex + 1) % slides.children.length;
      showSlide(slideIndex);
      showDescription(slideIndex);
    }
  
    // Set up automatic slideshow
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
  
    // Initial display
    showSlide(slideIndex);
    showDescription(slideIndex);
  });
  