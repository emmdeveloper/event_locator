"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import app from "@shared/FirebaseConfig";
import {
  collection,
  getFirestore,
  query,
  where,
  doc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import PostItems from "@components/Home/PostItems";

const Profile = () => {
  const { data: session } = useSession();
  const db = getFirestore(app);
  useEffect(() => {
    getUserPosts();
  }, [session]);
  const [userPost, setUserPost] = useState([]);
  const getUserPosts = async () => {
    if (session) {
      const q = query(
        collection(db, "posts"),
        where("email", "==", session?.user.email)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        setUserPost((userPost) => [...userPost, data]);
        console.log(doc.id, "=>", doc.data());
      });
    }
  };
  const DeletePost = async (id) => {
    await deleteDoc(doc(db, "posts", id));

    window.location.reload();
  };
  return (
    <div className="mt-8 pl-24">
      <div className="pt-8 ">
        <h2 className="font-bold text-3xl font-[Assistant] text-[#f96a5c] ">
          Profile
        </h2>
        <p className=" text-xl font-[Assistant]">Manage and Delete Posts</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {userPost &&
            userPost?.map((item, index) => (
              <div key={index}>
                <PostItems post={item} key={index} />
                <button
                  className="bg-red-400 w-full rounded-md text-white mt-2"
                  onClick={() => DeletePost(item.id)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
