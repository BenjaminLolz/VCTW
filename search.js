// script.js

// Select the search bar and all video containers
const searchBar = document.getElementById('search-bar');
const videoContainers = document.querySelectorAll('.video-container');

// Add event listener for input
searchBar.addEventListener('input', (event) => {
  const searchQuery = event.target.value.toLowerCase();

  // Loop through each video container
  videoContainers.forEach((video) => {
    const title = video.getAttribute('data-title').toLowerCase();

    // Check if the title includes the search query
    if (title.includes(searchQuery)) {
      video.style.display = 'block'; // Show the video
    } else {
      video.style.display = 'none'; // Hide the video
    }
  });
});
