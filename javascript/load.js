let videosPerPage = window.innerWidth <= 768 ? 6 : 12; // Reduce videos per page on mobile
let currentPage = 1; // Track the current page
const pagination = document.getElementById("pagination");

// Function to extract the YouTube video ID
function extractVideoID(url) {
  const match = url.match(/embed\/([^?]+)/);
  return match ? match[1] : "";
}

// Function to render videos for the current page with lazy loading
function renderVideos(videoList) {
  const videoGrid = document.getElementById("video-grid");
  videoGrid.innerHTML = ""; // Clear existing videos

  videoList.forEach((video) => {
    const videoDiv = document.createElement("div");
    videoDiv.className = "video";
    
    // Display a thumbnail instead of an iframe initially
    videoDiv.innerHTML = `
      <div class="video-thumbnail" data-url="${video.url}">
        <img src="https://img.youtube.com/vi/${extractVideoID(video.url)}/hqdefault.jpg" alt="${video.title}">
        <div class="play-button">▶</div>
      </div>
      <p>${video.title}</p>
    `;

    // Attach click event to load iframe only when clicked
    videoDiv.querySelector(".video-thumbnail").addEventListener("click", function() {
      this.innerHTML = `<iframe src="${this.dataset.url}" title="${video.title}" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    });

    videoGrid.appendChild(videoDiv);
  });
}

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
