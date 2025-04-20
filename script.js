 
// Get references to DOM elements
const postInput = document.getElementById("post-input");
const postBtn = document.getElementById("post-btn");
const feed = document.getElementById("feed");
const charCounter = document.getElementById("char-counter");

// Track characters typed
postInput.addEventListener("input", () => {
  charCounter.textContent = `${postInput.value.length} / 150`;
});

// Add new post on button click
postBtn.addEventListener("click", () => {
  const text = postInput.value.trim();
  if (text === "") return;

  createPost(text);
  postInput.value = "";
  charCounter.textContent = "0 / 150";
});

// Create a new post element
function createPost(text) {
  const postDiv = document.createElement("div");
  postDiv.className = "post";

  let likes = 0;

  postDiv.innerHTML = `
    <p>${text}</p>
    <div class="actions">
      <span class="like-btn">❤️ Like</span>
      <span class="like-count">${likes} likes</span>
      <span class="delete-btn">🗑️ Delete</span>
    </div>
  `;

  const likeBtn = postDiv.querySelector(".like-btn");
  const likeCount = postDiv.querySelector(".like-count");
  const deleteBtn = postDiv.querySelector(".delete-btn");

  // Like/unlike logic
  likeBtn.addEventListener("click", () => {
    if (likeBtn.classList.contains("liked")) {
      likes--;
      likeBtn.classList.remove("liked");
    } else {
      likes++;
      likeBtn.classList.add("liked");
    }
    likeCount.textContent = `${likes} likes`;
  });

  // Delete post logic
  deleteBtn.addEventListener("click", () => {
    feed.removeChild(postDiv);
  });

  feed.prepend(postDiv); // add new post at the top
}
