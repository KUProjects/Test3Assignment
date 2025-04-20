document.addEventListener('DOMContentLoaded', () => {
  const postInput = document.getElementById('postInput');
  const addPostBtn = document.getElementById('addPostBtn');
  const postsContainer = document.getElementById('postsContainer');

  // Marka la riixo "Post" button
  addPostBtn.addEventListener('click', () => {
    const text = postInput.value.trim();
    if (text === "") return;

    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `
      <p>${text}</p>
      <button class="likeBtn">🤍 0 Likes</button>
      <button class="deleteBtn">🗑️ Delete</button>
    `;

    postsContainer.prepend(postDiv); // ku dar meesha kore
    postInput.value = ""; // nadiifi input field

    const likeBtn = postDiv.querySelector('.likeBtn');
    let liked = false;
    let likeCount = 0;

    likeBtn.addEventListener('click', () => {
      liked = !liked;
      likeCount += liked ? 1 : -1;
      likeBtn.classList.toggle('liked', liked);
      likeBtn.textContent = `${liked ? "💖" : "🤍"} ${likeCount} Likes`;
    });

    const deleteBtn = postDiv.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', () => {
      postsContainer.removeChild(postDiv);
    });
  });
});
