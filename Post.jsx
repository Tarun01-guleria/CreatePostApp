import { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { PostList } from "../store/post-list-store";
function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card post-card">
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <FaDeleteLeft />
            </span>
            <span className="visually-hidden">unread messages</span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span class="badge text-bg-primary hashtag">{tag}</span>
          ))}
          <div className="alert alert-primary reactions" role="alert">
            Reacted by : {post.reactions}
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
