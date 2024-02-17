import { AiOutlineLike } from "react-icons/ai";

const LikeButton = () => {
  return (
    <button className="text-slate-700 hover:text-indigo-600 transition-all duration-500 ease-in-out ml-5 rtl:mr-5 flex items-center">
      <AiOutlineLike /> Like
    </button>
  );
};
export default LikeButton;
