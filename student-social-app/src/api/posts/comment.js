import posts from "../posts";

export default function handler(req, res) {
  const { postId, text } = req.body;
  const post = posts.find((p) => p.id === postId);
  if (post) {
    post.comments.push(text);
    return res.status(200).json({ comments: post.comments });
  }
  res.status(404).json({ message: "Post not found" });
}
