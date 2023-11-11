import { HiOutlineXCircle } from "react-icons/hi2";
import PostItems from "./PostItems";

const PostsModal = ({ post }) => {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <form method="dialog">
              <PostItems post={post} />
              {/* if there is a button in form, it will close the modal */}
              <button className="btn absolute top-2 right-2">
                <HiOutlineXCircle />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PostsModal;
