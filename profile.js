const favoritePosts = document.querySelector(".favorite_post");

const likedPosts = document.cookie
  .split("; ")
  .filter((row) => row.startsWith("liked_posts"))

likedPosts.forEach((post) => {
  const postId = post.split("=")[1];

  const img = document.createElement("img");
  img.src = `img/photo${postId}.png`;
  favoritePosts.appendChild(img);
});
