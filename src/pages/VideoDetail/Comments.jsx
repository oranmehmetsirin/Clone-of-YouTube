import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";

const Comments = ({ data }) => {
  return (
    <div className="my-6">
      <h2 className="text-xl font-bold">{data.commentsCount} Comment </h2>
      <input
        className="w-full bg-transparent border-b p-2 mb-5 outline-none"
        placeholder="Add a comment"
        type="text"
      />
      {data.data.map((i, key) => (
        <div key={key} className="flex gap-2 items-start px-1 py-4">
          <img
            className="w-10 h-10 rounded-full"
            src={i.authorThumbnail[0].url}
          />
          <div className="flex flex-col gap-2">
            <h5 className="flex gap-2 items-center">
              <span className="font-semibold">{i.authorText}</span>
              <span className="text-gray-400">{i.publishedTimeText}</span>
            </h5>
            <p>{i.textDisplay}</p>
            <div className="flex gap-5 items-center">
              <div className="flex gap-1 p-1 rounded cursor-pointer hover:bg-zinc-700 items-center">
                <AiOutlineLike />
                {i.likesCount}
              </div>
              <div className="p-1 rounded cursor-pointer hover:bg-zinc-700">
                <AiOutlineDislike />
              </div>
              <button className="p-1 rounded cursor-pointer hover:bg-zinc-700">
                Response
              </button>
            </div>
            {i.replyCount > 0 && (
              <div className="flex w-fit items-center p-1 rounded-md gap-2 cursor-pointer text-blue-500 hover:bg-[#36639669] ">
                <TiArrowSortedDown />
                {i.replyCount}
                Responses
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
