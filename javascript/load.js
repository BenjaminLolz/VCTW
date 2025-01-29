let loadedVideos = 0;
const videosPerLoad = 8;
const videoGrid = document.getElementById("video-grid");
const loadMoreButton = document.getElementById("load-more");
const searchBar = document.getElementById("search-bar");
let videos = [];

// Function to create video elements without loading iframes immediately
function createVideoElement(video) {
  const videoDiv = document.createElement("div");
  videoDiv.className = "video";
  videoDiv.setAttribute("data-title", video.title.toLowerCase());

  // Placeholder for lazy loading
  videoDiv.innerHTML = `
    <div class="video-thumbnail" data-src="${video.url}">
      <img src="https://img.youtube.com/vi/${video.url.split("/embed/")[1].split("?")[0]}/hqdefault.jpg" alt="${video.title}">
      <div class="play-button">▶</div>
    </div>
    <p>${video.title}</p>
  `;

  // Click event to replace image with iframe
  videoDiv.querySelector(".video-thumbnail").addEventListener("click", function () {
    this.outerHTML = `
      <iframe src="${video.url}" title="${video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;
  });

  return videoDiv;
}

// Function to load next batch of videos
function loadVideos() {
  const nextVideos = videos.slice(loadedVideos, loadedVideos + videosPerLoad);
  nextVideos.forEach(video => videoGrid.appendChild(createVideoElement(video)));
  loadedVideos += nextVideos.length;

  if (loadedVideos >= videos.length) {
    loadMoreButton.style.display = "none";
  }
}

// Search Functionality (Hide instead of clearing)
function searchVideos(event) {
  const query = event.target.value.toLowerCase();
  document.querySelectorAll(".video").forEach(video => {
    const title = video.getAttribute("data-title");
    video.style.display = title.includes(query) ? "block" : "none";
  });

  loadMoreButton.style.display = query ? "none" : (loadedVideos < videos.length ? "block" : "none");
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
