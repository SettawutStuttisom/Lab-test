import posts from "../posts";

export default function handler(req, res) {
  const { postId } = req.body;
  const post = posts.find((p) => p.id === postId);
  if (post) {
    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;
    return res.status(200).json({ liked: post.liked, likes: post.likes });
  }
  res.status(404).json({ message: "Post not found" });
}
