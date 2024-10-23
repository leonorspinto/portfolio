// Get the custom cursor and text elements
const cursor = document.querySelector('.cursor');
const text = document.querySelector('.text');

var mouseX = 0;
var mouseY = 0;

// Update the cursor and text position based on mouse movements
document.addEventListener('mousemove', e => {
  const x = e.pageX;
  const y = e.pageY;
  mouseX = x;
  mouseY = y;

  cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  text.style.transform = `translate3d(${x + 20}px, ${y}px, 0)`; // Offset the text a bit
});

// Ensure the custom cursor stays visible while scrolling
document.addEventListener('scroll', () => {
  const x = window.pageXOffset + mouseX;
  const y = window.pageYOffset + mouseY;
  
  cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  text.style.transform = `translate3d(${x + 20}px, ${y}px, 0)`;
});
