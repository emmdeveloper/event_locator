"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Form from "@components/CreateEvent/Form";
const CreatePost = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, []);

  return (
    <div className="flex justify-center">
      <div className="p-6 mt-8 lg:w-[35%]">
        <h2 className="text-[30px] font-bold text-[#f96a5c] font-[Assistant]">
          Create Event
        </h2>
        <p className="font-[Assistant] font-medium">
          Create Sport Event to discover players with talent like you and meet
          new Friends
        </p>
        <Form />
      </div>
    </div>
  );
};

export default CreatePost;
