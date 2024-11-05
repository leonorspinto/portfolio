// Get the custom cursor element
const cursor = document.querySelector('.ball_cursor');

// Update the cursor position based on mouse movements
document.addEventListener('mousemove', e => {
  const x = e.pageX;
  const y = e.pageY;
  mouseX = x;
  mouseY = y;

  cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});

// Ensure the custom cursor stays visible while scrolling
document.addEventListener('scroll', () => {
  const x = window.pageXOffset + mouseX;
  const y = window.pageYOffset + mouseY;
  
  cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});