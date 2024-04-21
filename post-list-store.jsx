import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

function reducer(curPostList, action) {
  let newPostList = curPostList;
  switch (action.type) {
    case "Del_Post":
      newPostList = curPostList.filter(
        (post) => post.id !== action.payload.postId
      );
      break;
    case "ADD_POST":
      newPostList = [action.payload, ...curPostList];
  }
  return newPostList;
}

const default_post_list = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hii Friends I am going to mumbai for my vecations and going to enjoy a lot meet u soon",
    reactions: 100,
    userId: "9",
    tags: ["#vecations", "#enjoying"],
  },
  {
    id: "2",
    title: "Passed my Btech",
    body: "4 saal ki masti ke baad ho gya haai paas",
    reactions: 101,
    userId: "11",
    tags: ["#graduated", "#btech"],
  },
  {
    id: "3",
    title: "Going to Gym",
    body: "Wow I am going to gym today",
    reactions: 200,
    userId: "12",
    tags: ["#gym", "#bodybuilding"],
  },
];

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(reducer, default_post_list);
  function addPost(userId, postTitle, postBody, reactions, tags) {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions,
        userId,
        tags,
      },
    });
  }
  function deletePost(postId) {
    dispatchPostList({
      type: "Del_Post",
      payload: {
        postId,
      },
    });
  }

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
