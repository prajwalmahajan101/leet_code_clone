import { useEffect, useState } from "react";

const initialState = {
  isOpen: false,
  videoId: "",
};

const useYoutube = () => {
  const [youtubePlayer, setYoutubePlayer] = useState(initialState);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeYoutubePlayer();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const openYoutubePlayer = (videoId: string) => {
    setYoutubePlayer({ isOpen: true, videoId });
  };

  const closeYoutubePlayer = () => {
    setYoutubePlayer(initialState);
  };

  return {
    ...youtubePlayer,
    openYoutubePlayer,
    closeYoutubePlayer,
  };
};

export default useYoutube;
