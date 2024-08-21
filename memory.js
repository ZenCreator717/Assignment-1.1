// Access the image element
const image = document.getElementById('zombie-halloween');

// Initialize rotation angle
let rotationAngle = 0;

// Function to rotate the image
function rotateImage() {
    rotationAngle += 90; // Rotate by 90 degrees
    image.style.transform = `rotate(${rotationAngle}deg`;
}

// Example: Rotate image on click
image.addEventListener('click', rotateImage);

