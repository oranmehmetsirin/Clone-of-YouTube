import { useContext } from "react";
import SideBar from "../components/SideBar";
import VideoCard from "../components/VideoCard";
import { videoContext } from "../context/videoContext";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Feed = () => {
  const { videos, isLoading, error } = useContext(videoContext);

  return (
    <div className="flex">
      <SideBar />
      <div className="videos">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          videos?.map((item) => <VideoCard key={item.videoId} video={item} />)
        )}
      </div>
    </div>
  );
};

export default Feed;
