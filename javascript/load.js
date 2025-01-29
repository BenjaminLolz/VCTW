let loadedVideos = 0;
const videosPerLoad = 8;
const videoGrid = document.getElementById("video-grid");
const loadMoreButton = document.getElementById("load-more");
const searchBar = document.getElementById("search-bar");
let videos = []; // Empty array to be populated by the separate script

// Function to render videos (used for both load and search)
function renderVideos(videoList) {
  videoGrid.innerHTML = ""; // Clear current videos
  videoList.forEach((video) => {
    const videoDiv = document.createElement("div");
    videoDiv.className = "video";
    videoDiv.innerHTML = `
      <iframe src="${video.url}" title="${video.title}" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p>${video.title}</p>
    `;
    videoGrid.appendChild(videoDiv);
  });
}

// Function to load initial videos and "Load More"
function loadVideos() {
  const nextVideos = videos.slice(loadedVideos, loadedVideos + videosPerLoad);
  renderVideos(nextVideos);
  loadedVideos += nextVideos.length;

  // Hide the "Load More" button if all videos are loaded
  if (loadedVideos >= videos.length) {
    loadMoreButton.style.display = "none";
  }
}

// Search Functionality
function searchVideos(event) {
  const query = event.target.value.toLowerCase();
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(query)
  );
  renderVideos(filteredVideos);

  // Hide the "Load More" button during search
  if (query) {
    loadMoreButton.style.display = "none";
  } else if (loadedVideos < videos.length) {
    loadMoreButton.style.display = "block";
  }
}

// Event Listeners
loadMoreButton.addEventListener("click", loadVideos);
searchBar.addEventListener("input", searchVideos);

// Fetch videos from the external script
document.addEventListener("DOMContentLoaded", () => {
  if (window.videoData && Array.isArray(window.videoData)) {
    videos = window.videoData;
    loadVideos();
  } else {
    console.error("Video data could not be loaded!");
  }
});
