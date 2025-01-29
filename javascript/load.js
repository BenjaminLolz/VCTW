let videosPerPage = 12; // Number of videos per page
let currentPage = 1; // Track the current page
const pagination = document.getElementById("pagination");

// Function to render videos for the current page
function renderPage(page) {
  const startIndex = (page - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;
  const paginatedVideos = videoData.slice(startIndex, endIndex); // Use videoData from title.js

  renderVideos(paginatedVideos); // Call renderVideos from title.js
  updatePagination(page);
}

// Function to update pagination navigation
function updatePagination(page) {
  const totalPages = Math.ceil(videoData.length / videosPerPage);
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.innerText = i;
    button.className = i === page ? "active" : "";
    button.addEventListener("click", () => {
      currentPage = i;
      renderPage(i);
    });
    pagination.appendChild(button);
  }
}

// Initialize the videos and render the first page
document.addEventListener("DOMContentLoaded", () => {
  if (Array.isArray(videoData)) {
    renderPage(currentPage); // Start with the first page
  } else {
    console.error("Video data could not be loaded!");
  }
});
