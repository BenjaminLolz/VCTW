// Select the search bar and all video containers
const searchBar = document.getElementById("search-bar");
const videoContainers = document.querySelectorAll(".video");

console.log("search.js is loaded and running");
console.log("Search bar detected:", searchBar); // Log search bar detection
console.log("Video containers detected:", videoContainers); // Log all videos detected

// Add event listener for input (to search in real time)
searchBar.addEventListener("input", (event) => {
  const searchQuery = event.target.value.toLowerCase(); // Get the search query
  console.log("Search query entered:", searchQuery); // Log the entered query

  // Loop through each video container
  videoContainers.forEach((video) => {
    const title = video.getAttribute("data-title")?.toLowerCase(); // Get the title of the video
    console.log("Current video title:", title); // Log the title of the current video

    // Check if the title includes the search query
    if (title && title.includes(searchQuery)) {
      video.style.display = "block"; // Show the video
      console.log("Video matched:", title); // Log matching video
    } else {
      video.style.display = "none"; // Hide the video
      console.log("Video hidden:", title); // Log hidden video
    }
  });
});

// Add an optional "Enter" key listener for search
searchBar.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default form submission
    console.log("Enter key pressed"); // Log Enter key press
  }
});
