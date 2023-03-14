import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS_GAMEPLAY } from "../../../Graphql/Queries";

interface GameplayInfo {
  name: string;
  thumb: string;
  slug: string;
}

interface GameplaysData {
  getAllGameplay: GameplayInfo[];
}

export const useLogic = () => {
  const { data } = useQuery<GameplaysData>(GET_ALL_POSTS_GAMEPLAY);
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "linear",
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  return {
    data: {
      data,
      settings,
    },
  };
};
