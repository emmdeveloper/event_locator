"use client";
import { useEffect, useState } from "react";
import PostItems from "./PostItems";
import PostsModal from "./PostsModal";
const Posts = ({ posts }) => {
  const [post, setPost] = useState();

  console.log(posts);
  return (
    <div>
      <PostsModal post={post} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((item, index) => (
          <div
            onClick={() => {
              window.my_modal_1.showModal();
              setPost(item);
            }}
            key={index}
          >
            <PostItems post={item} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
