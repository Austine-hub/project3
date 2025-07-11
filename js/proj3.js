 function changeShot(imgName) {
  document.getElementById('main-shot').src = imgName;

  // Extract file name from path
  const fileName = imgName.split('/').pop(); // e.g., "pic3.jpg"
  const baseName = fileName.split('.')[0];   // e.g., "pic3"

  // Create a friendlier name
  const formattedName = baseName.replace(/[-_]/g, ' ').toUpperCase(); // "pic-3" → "PIC 3"

  document.getElementById('shot-description').textContent = formattedName;
}
