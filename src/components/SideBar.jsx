import { Link } from "react-router-dom";
import { categories } from "../constans/index";
import { useContext } from "react";
import { videoContext } from "../context/videoContext";

const SideBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(videoContext);
  return (
    <div className="flex flex-col p-1 md:p-4">
      {categories.map((item, i) => (
        <Link to={"/"} key={i} onClick={() => setSelectedCategory(item)}>
          <div className="flex gap-2 py-4 px-2 md:px-3 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d]">
            <span className="max-md:text-2xl">{item.icom}</span>
            <span className="max-md:hidden line-clamp-1">{item.name}</span>
          </div>
          {item.divider && <hr />}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
