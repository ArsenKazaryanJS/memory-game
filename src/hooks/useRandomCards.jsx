import {
  Heart,
  Star,
  CircleCheck,
  Square,
  CircleX,
  Zap,
  Music,
  Image,
  Bell,
  Bookmark,
  Award,
  Coffee,
  Camera,
  Smile,
  Snowflake,
  Sun,
} from "lucide-react";

export const useRandomCards = (cardsNumber) => {
  const originalArray = [
    { id: 1, icon: Heart, flipped: false, value: "Heart", isWin: false },
    { id: 2, icon: Star, flipped: false, value: "Star", isWin: false },
    {
      id: 3,
      icon: CircleCheck,
      flipped: false,
      value: "Checkmark",
      isWin: false,
    },
    { id: 4, icon: Square, flipped: false, value: "Square", isWin: false },
    { id: 5, icon: CircleX, flipped: false, value: "X", isWin: false },
    { id: 6, icon: Zap, flipped: false, value: "Lightning", isWin: false },
    { id: 7, icon: Music, flipped: false, value: "Music", isWin: false },
    { id: 8, icon: Image, flipped: false, value: "Image", isWin: false },
    { id: 9, icon: Bell, flipped: false, value: "Bell", isWin: false },
    {
      id: 10,
      icon: Bookmark,
      flipped: false,
      value: "Bookmark",
      isWin: false,
    },
    { id: 11, icon: Award, flipped: false, value: "Award", isWin: false },
    { id: 12, icon: Coffee, flipped: false, value: "Coffee", isWin: false },
    { id: 13, icon: Camera, flipped: false, value: "Camera", isWin: false },
    { id: 14, icon: Smile, flipped: false, value: "Smile", isWin: false },
    {
      id: 15,
      icon: Snowflake,
      flipped: false,
      value: "Snowflake",
      isWin: false,
    },
    { id: 16, icon: Sun, flipped: false, value: "Sun", isWin: false },
    { id: 17, icon: Heart, flipped: false, value: "Heart", isWin: false },
    { id: 18, icon: Star, flipped: false, value: "Star", isWin: false },
    {
      id: 19,
      icon: CircleCheck,
      flipped: false,
      value: "Checkmark",
      isWin: false,
    },
    { id: 20, icon: Square, flipped: false, value: "Square", isWin: false },
    { id: 21, icon: CircleX, flipped: false, value: "X", isWin: false },
    { id: 22, icon: Zap, flipped: false, value: "Lightning", isWin: false },
    { id: 23, icon: Music, flipped: false, value: "Music", isWin: false },
    { id: 24, icon: Image, flipped: false, value: "Image", isWin: false },
    { id: 25, icon: Bell, flipped: false, value: "Bell", isWin: false },
    {
      id: 26,
      icon: Bookmark,
      flipped: false,
      value: "Bookmark",
      isWin: false,
    },
    { id: 27, icon: Award, flipped: false, value: "Award", isWin: false },
    { id: 28, icon: Coffee, flipped: false, value: "Coffee", isWin: false },
    { id: 29, icon: Camera, flipped: false, value: "Camera", isWin: false },
    { id: 30, icon: Smile, flipped: false, value: "Smile", isWin: false },
    {
      id: 31,
      icon: Snowflake,
      flipped: false,
      value: "Snowflake",
      isWin: false,
    },
    { id: 32, icon: Sun, flipped: false, value: "Sun", isWin: false },
  ];

  const sortedArray = originalArray
    .sort((a, b) => {
      if (a.value < b.value) return -1;
      if (a.value > b.value) return 1;  
      return 0;
    })
    .slice(0, cardsNumber);

  function shuffleArray(array) {
    const randomArray = array.sort(() => Math.random() - 0.5);
    return randomArray;
  }

  const randomCards = shuffleArray(sortedArray);
  return { randomCards };
};
