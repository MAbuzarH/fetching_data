import React from "react";
import getUser from "../../../lib/getUser";
import getUserPost from "../../../lib/getUserPost";
import { User } from "../../../lib/type.d";
import { Post } from "../../../lib/type.d";
import { Suspense } from "react";
import UserPost from "./components/UserPost";
import type  { Metadata } from "next";





type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata>{
  const userData: Promise<User> = getUser(userId);
  const user:User =  await userData;
  return{
    title:user.name,
    description: `this is the page of ${user.name} matadata`
  }
}

async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPost(userId);
  //   const [user, userPosts] = await Promise.all([userData, userPostsData]);
  const user = await userData;
  return (
    <>
      <h2 className="text-4xl text-center font-extrabold">{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPost promise={userPostsData} />
      </Suspense>
    </>
  );
}

export default UserPage;
