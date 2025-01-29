// Select the search bar and all video containers
const searchBar = document.getElementById("search-bar");
const videoContainers = document.querySelectorAll(".video");

// Add event listener for input (to search in real time)
searchBar.addEventListener("input", (event) => {
  const searchQuery = event.target.value.toLowerCase(); // Get the search query

  // Loop through each video container
  videoContainers.forEach((video) => {
    const title = video.getAttribute("data-title").toLowerCase(); // Get the title of the video

    // Check if the title includes the search query
    if (title.includes(searchQuery)) {
      video.style.display = "block"; // Show the video
    } else {
      video.style.display = "none"; // Hide the video
    }
  });
});

// Add an optional "Enter" key listener for search
searchBar.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default form submission
  }
});
