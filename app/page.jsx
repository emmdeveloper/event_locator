"use client";
import GameLists from "@components/Home/GameLists";
import Hero from "@components/Home/Hero";
import Search from "@components/Home/Search";
import Posts from "@components/Home/Posts";
import Image from "next/image";
import {
  getFirestore,
  doc,
  setDoc,
  where,
  getDoc,
  collection,
  getDocs,
  query,
} from "firebase/firestore";
import app from "@shared/FirebaseConfig";
import { useEffect, useState } from "react";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState();
  const db = getFirestore(app);
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      setPosts((posts) => [...posts, doc.data()]);
      /*      console.log(doc.id, "=>", doc.data()); */
    });
  };
  const onGamePress = async (gameName) => {
    setPosts([]);
    if (gameName == "Other Games") {
      getPosts();
      return;
    }
    const q = query(collection(db, "posts"), where("game", "==", gameName));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      data.id = doc.id;
      setPosts((posts) => [...posts, doc.data()]);
    });
  };
  const searchPosts = async (value) => {
    setPosts([]);
    const q = query(collection(db, "posts"), where("zip", "==", value));
    const querySnapshot = await getDocs(q);
    if (searchText) {
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        setPosts((posts) => [...posts, doc.data()]);
      });
    } else {
      getPosts();
    }
  };
  return (
    <div>
      <Hero />
      <Search
        userInput={(value) => searchPosts(value)}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <GameLists onGamePress={onGamePress} />
      <Posts posts={posts} />
    </div>
  );
}
