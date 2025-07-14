// Like functionality
document.querySelectorAll(".like-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("liked");
    const span = this.querySelector("span");
    if (this.classList.contains("liked")) {
      span.textContent = "Liked";
    } else {
      span.textContent = "Like";
    }
  });
});

// Comment functionality
document.querySelectorAll(".comment-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const postId = this.dataset.post;
    const commentsSection = document.getElementById(`comments-${postId}`);

    if (commentsSection.style.display === "none") {
      commentsSection.style.display = "block";
    } else {
      commentsSection.style.display = "none";
    }
  });
});

// Handle comment submission
function handleComment(event, postId) {
  if (event.key === "Enter" && event.target.value.trim()) {
    const commentText = event.target.value.trim();
    const commentsSection = document.getElementById(`comments-${postId}`);
    const commentInput = commentsSection.querySelector(".comment-input");

    // Create new comment element
    const newComment = document.createElement("div");
    newComment.className = "comment";
    newComment.innerHTML = `
                    <div class="comment-avatar">JD</div>
                    <div class="comment-content">
                        <div class="comment-author">John Doe</div>
                        ${commentText}
                    </div>
                `;

    // Insert before the comment input
    commentsSection.insertBefore(newComment, commentInput);

    // Clear the input
    event.target.value = "";

    // Update comment count in post stats
    const post = commentsSection.closest(".post");
    const commentCount = post.querySelector(".post-stats span:last-child");
    const currentCount = parseInt(commentCount.textContent.match(/\d+/)[0]);
    commentCount.textContent = `💬 ${currentCount + 1} comments`;
  }
}

// Friend request actions
document.querySelectorAll(".friend-actions .btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const friendRequest = this.closest(".friend-request");
    const action = this.textContent;

    if (action === "Confirm") {
      alert("Friend request confirmed!");
    } else {
      alert("Friend request deleted!");
    }

    friendRequest.remove();
  });
});

// Post composer interaction
document
  .querySelector(".composer-input")
  .addEventListener("click", function () {
    alert("Post composer opened! (This would open a modal in a real app)");
  });

// Sidebar item interactions
document.querySelectorAll(".sidebar-item").forEach((item) => {
  item.addEventListener("click", function () {
    // Remove active class from all items
    document
      .querySelectorAll(".sidebar-item")
      .forEach((i) => i.classList.remove("active"));
    // Add active class to clicked item
    this.classList.add("active");
  });
});

// Navigation interactions
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function () {
    document
      .querySelectorAll(".nav-item")
      .forEach((i) => i.classList.remove("active"));
    this.classList.add("active");
  });
});
