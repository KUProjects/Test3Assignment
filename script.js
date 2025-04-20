document.addEventListener('DOMContentLoaded', () => {
    const postInput = document.getElementById('postInput');
    const addPostBtn = document.getElementById('addPostBtn');
    const postsContainer = document.getElementById('postsContainer');
  
    // Add new post
   
    // Create a post element
    
      postsContainer.prepend(postDiv); // Add to top of feed
  
      // Like/unlike functionality
      
    
  });
  document.addEventListener('DOMContentLoaded', () => {
    const postInput = document.getElementById('postInput');
    const addPostBtn = document.getElementById('addPostBtn');
    const postsContainer = document.getElementById('postsContainer');

    // Add new post
    addPostBtn.addEventListener('click', () => {
        const postText = postInput.value.trim();
        if (postText === '') return;

        // Create post element
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const content = document.createElement('p');
        content.textContent = postText;

        // Like button
        const likeBtn = document.createElement('button');
        likeBtn.textContent = '👍 Like';
        likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('active');
            if (likeBtn.classList.contains('active')) {
                likeBtn.textContent = '👍 Liked';
                dislikeBtn.classList.remove('active');
                dislikeBtn.textContent = '👎 Dislike';
            } else {
                likeBtn.textContent = '👍 Like';
            }
        });

        // Dislike button
        const dislikeBtn = document.createElement('button');
        dislikeBtn.textContent = '👎 Dislike';
        dislikeBtn.addEventListener('click', () => {
            dislikeBtn.classList.toggle('active');
            if (dislikeBtn.classList.contains('active')) {
                dislikeBtn.textContent = '👎 Disliked';
                likeBtn.classList.remove('active');
                likeBtn.textContent = '👍 Like';
            } else {
                dislikeBtn.textContent = '👎 Dislike';
            }
        });

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '🗑️ Delete';
        deleteBtn.addEventListener('click', () => {
            postDiv.remove();
        });

        // Add everything to post
        postDiv.appendChild(content);
        postDiv.appendChild(likeBtn);
        postDiv.appendChild(dislikeBtn);
        postDiv.appendChild(deleteBtn);

        // Add post to top of the feed
        postsContainer.prepend(postDiv);

        // Clear input
        postInput.value = '';
    });
});
