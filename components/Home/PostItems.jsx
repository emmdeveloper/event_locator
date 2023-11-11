import { HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";
import Image from "next/image";
const PostItems = ({ post }) => {
  return (
    <div className="mt-10" key={post?.title}>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow glassmorphism ">
        <img
          className="rounded-t-lg w-full"
          src={post?.image}
          alt="evnt-image"
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {post?.title}
          </h5>
          <div className="flex items-center gap-2 mb-2">
            <HiOutlineCalendar className="text-[20px]" />
            {post?.date}
          </div>
          <div className="flex items-center gap-2 mb-2">
            <HiOutlineLocationMarker className="text-[20px]" />
            {post?.location}
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {post?.desc}
          </p>
          <h3>Posted By</h3>
          <div className="flex items-center py-3 gap-2">
            <Image
              src={post?.userImage}
              width={40}
              height={40}
              alt="user-image"
              className="rounded-full"
            />
            <div>
              <h2 className="capitalize font-bold font-[Assistant]">
                {post?.userName}
              </h2>
              <p className=" font-[Assistant]">{post?.email}</p>
            </div>
          </div>
          <button
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white shadow bg-[#F96A5C] rounded-md"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostItems;
