import { Post } from "@/lib/type";
import React from "react";

type Props = {
  promise: Promise<Post[]>;
};

async function UserPost({ promise }: Props) {
  const posts = await promise;

  const content = posts.map((post) => {
    return (
      <article key={post.id}>
        <h2 className="text-center text-2xl text-bold">{post.title}</h2>
        <p className="px-2">{post.body}</p>
        <br />
      </article>
    );
  });
  return content;
}

export default UserPost;
