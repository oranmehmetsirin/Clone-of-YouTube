import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value;

    navigate(`/results?search_query=${text}`);
  };

  return (
    <header className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex items-center gap-2">
        <img
          className="w-[50px]"
          src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
        />
        <h1 className="text-2xl font-bold font-mono max-sm:hidden">YouTube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex group border border-gray-400 rounded-[20px] overflow-hidden"
      >
        <input
          type="text"
          className="rounded-l-[20px] bg-zinc-800 group-hover:bg-gray-800 text-white px-5 py-2 outline-none"
          placeholder="Enter the word you want to search.."
        />
        <button className="rounded-r-[20px] bg-zinc-800 px-4 text-xl group-hover:bg-gray-800">
          <FaSearch />
        </button>
      </form>
      <div className="flex text-xl cursor-pointer gap-4">
        <FaBell className="hover:text-gray-400 transition duration-[250ms]" />
        <IoVideocam className="hover:text-gray-400 transition duration-[250ms]" />
        <MdVideoLibrary className="hover:text-gray-400 transition duration-[250ms]" />
      </div>
    </header>
  );
};

export default Header;
