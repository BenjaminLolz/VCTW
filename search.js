document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("search-bar");
  const videoGrid = document.querySelector(".video-grid");
  const CACHE_KEY = "cachedVideos";

  // Function to display videos
  const displayVideos = (videos) => {
    videoGrid.innerHTML = ""; // Clear the grid
    videos.forEach((video) => {
      const videoDiv = document.createElement("div");
      videoDiv.className = "video";
      videoDiv.dataset.title = video.title.toLowerCase();
      videoDiv.innerHTML = `
        <iframe src="${video.url}" title="${video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>${video.title}</p>
      `;
      videoGrid.appendChild(videoDiv);
    });
  };

  // Load videos from cache or initialize if not cached
  const loadVideos = () => {
    const cachedVideos = localStorage.getItem(CACHE_KEY);
    if (cachedVideos) {
      const videos = JSON.parse(cachedVideos);
      displayVideos(videos);
    } else {
      console.error("No cached videos found!");
    }
  };

  // Search functionality
  searchBar.addEventListener("input", (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const videos = videoGrid.querySelectorAll(".video");

    videos.forEach((video) => {
      if (video.dataset.title.includes(searchQuery)) {
        video.style.display = "block";
      } else {
        video.style.display = "none";
      }
    });
  });

  // Load videos on page load
  loadVideos();
});