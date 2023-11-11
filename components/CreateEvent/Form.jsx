"use client";
import Data from "@shared/Data";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import app from "@shared/FirebaseConfig";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Toast from "@components/Home/Toast";
const Form = () => {
  const db = getFirestore(app);
  const storage = getStorage(app);
  const [showToast, setShowToast] = useState(false);
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState();
  const [submit, setSubmit] = useState(false);
  const { data: session } = useSession();
  useEffect(() => {
    setInputs((values) => ({ ...values, userName: session?.user?.name }));
    setInputs((values) => ({ ...values, userImage: session?.user?.image }));
    setInputs((values) => ({ ...values, email: session?.user?.email }));
  }, []);
  useEffect(() => {
    if (submit === true) {
      savePost();
    }
  }, [submit]);

  const handleSubmit = async (e) => {
    setShowToast(true);
    e.preventDefault();
    console.log("OnSubmit:", inputs);
    //
    setSubmit(true);
    const storageRef = ref(storage, "ninja-sports" + file?.name);
    //
    await uploadBytes(storageRef, file)
      //
      .then((snapshot) => {
        console.log("Uploaded a blob or file!");
      })
      //
      .then((resp) => {
        //
        getDownloadURL(storageRef).then(async (url) => {
          console.log(url);
          //
          await setDoc(doc(db, "posts", Date.now().toString()), {
            ...inputs,
            image: url,
          });
          //
        });
      });
    console.log(showToast);
  };
  const savePost = async () => {
    await setDoc(doc(db, "posts", Date.now().toString()), {
      ...inputs,
    });
    console.log(inputs);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  return (
    <div className="mt-4">
      {showToast && <Toast />}

      <div className="absolute top-10 right-10"></div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <textarea
          name="desc"
          className="w-full mb-4 
        outline-blue-400 border-[1px] 
        p-2 rounded-md"
          required
          onChange={handleChange}
          placeholder="Write Description here"
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          onChange={handleChange}
          required
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Zip"
          name="zip"
          required
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <select
          name="game"
          onChange={handleChange}
          required
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        >
          <option disabled defaultValue>
            Select Game
          </option>
          {Data.GameList.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>
        {
          <input
            type="file"
            name="image"
            accept="image/gif, image/jpeg, image/png, image/href"
            className="mb-5 border-[1px] w-full"
            onChange={(e) => setFile(e.target.files[0])}
          />
        }
        <button
          type="submit"
          className="bg-blue-500 w-full p-1 
rounded-md text-white font-[Assistant]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
