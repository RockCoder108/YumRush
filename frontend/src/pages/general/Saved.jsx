import { API_BASE_URL } from "../../config/config.js";
import React, { useEffect, useState } from "react";
import "../../styles/reels.css";
import axios from "axios";
import ReelFeed from "../../components/ReelFeed";

const Saved = () => {
  const [videos, setVideos] = useState([]);

  const API = API_BASE_URL;

  useEffect(() => {
    axios
      .get(`${API}/api/food/save`, { withCredentials: true })
      .then((response) => {
        // console.log(response.data)
        const savedFoods = response.data.savedFoods.map((item) => ({
          _id: item.food._id,
          video: item.food.video,
          description: item.food.description,
          likeCount: item.food.likeCount,
          savesCount: item.food.savesCount,
          commentsCount: item.food.commentsCount,
          foodPartner: item.food.foodPartner,
        }));
        setVideos(savedFoods);
      });
  }, []);

  const removeSaved = async (item) => {
    try {
      await axios.post(
        `${API}/api/food/save`,
        { foodId: item._id },
        { withCredentials: true }
      );
      setVideos((prev) =>
        prev.map((v) =>
          v._id === item._id
            ? { ...v, savesCount: Math.max(0, (v.savesCount ?? 1) - 1) }
            : v
        )
      );
    } catch {
      // noop
    }
  };

  return (
    <ReelFeed
      items={videos}
      onSave={removeSaved}
      emptyMessage="No saved videos yet."
    />
  );
};

export default Saved;
