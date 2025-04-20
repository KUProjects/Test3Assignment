document.addEventListener('DOMContentLoaded', () => {
  const postInput = document.getElementById('postInput');
  const addPostBtn = document.getElementById('addPostBtn');
  const postsContainer = document.getElementById('postsContainer');

  // Load posts from localStorage
  let posts = JSON.parse(localStorage.getItem('posts')) || [];

  // Save posts to localStorage
  const savePosts = () => {
      localStorage.setItem('posts', JSON.stringify(posts));
  };

  // Create a post element
  const createPostElement = (post) => {
      const postDiv = document.createElement('div');
      postDiv.className = 'post';
      postDiv.innerHTML = `
          <p>${post.text}</p>
          <button class="likeBtn ${post.liked ? 'liked' : ''}" data-id="${post.id}">
              ${post.likes} ${post.likes === 1 ? 'like' : 'likes'}
          </button>
          <button class="deleteBtn" data-id="${post.id}">🗑️ Delete</button>
      `;
      return postDiv;
  };

  // Render all posts
  const renderPosts = () => {
      postsContainer.innerHTML = '';
      posts.forEach(post => {
          const postElement = createPostElement(post);
          postsContainer.prepend(postElement); // Add to top of feed
      });
  };

  // Add new post
  addPostBtn.addEventListener('click', () => {
      const text = postInput.value.trim();
      if (text) {
          const newPost = {
              id: Date.now(),
              text: text,
              likes: 0,
              liked: false
          };
          posts.unshift(newPost);
          savePosts();
          renderPosts();
          postInput.value = '';
      }
  });

  // Handle post interactions (like/delete)
  postsContainer.addEventListener('click', (e) => {
      const target = e.target;
      const postId = parseInt(target.dataset.id);

      if (target.classList.contains('likeBtn')) {
          const post = posts.find(p => p.id === postId);
          if (post) {
              post.liked = !post.liked;
              post.likes += post.liked ? 1 : -1;
              savePosts();
              renderPosts();
          }
      } else if (target.classList.contains('deleteBtn')) {
          posts = posts.filter(p => p.id !== postId);
          savePosts();
          renderPosts();
      }
  });

  // Initial render
  renderPosts();
});
