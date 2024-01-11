// Your JavaScript code goes here

// Example: Add a simple function for demonstration
function showMessage() {
    alert("Hello from The Cigar Lounge!");
}

// Add this function to scroll to the contact section when the button is clicked
function scrollToContact() {
    const contactSection = document.getElementById('contactSection');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Add this event listener to show/hide the button based on scroll position
window.addEventListener('scroll', function() {
    const contactButton = document.getElementById('contactButton');
    const scrollPosition = window.scrollY;

    // You can adjust the scroll threshold based on your design
    const scrollThreshold = 200;

    if (scrollPosition > scrollThreshold) {
        contactButton.style.display = 'block';
    } else {
        contactButton.style.display = 'none';
    }
});
