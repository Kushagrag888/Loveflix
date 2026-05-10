// src/data/Memories.js
import { i } from "framer-motion/client";
import mem1 from "../assets/images/mem1.jpeg";
import mem2 from "../assets/images/mem2.jpeg";
import mem3 from "../assets/images/mem3.jpeg";
import mem4 from "../assets/images/mem4.jpeg";
import mem5 from "../assets/images/mem5.jpeg";
import mem6 from "../assets/images/mem6.jpeg";
import mem7 from "../assets/images/mem7.jpeg";
import mem8 from "../assets/images/mem8.jpeg";
import mem9 from "../assets/images/mem9.jpeg";


import memory1 from "../assets/videos/memory1.mp4";
import memory2 from "../assets/videos/memory2.mp4";
import memory3 from "../assets/videos/memory3.mp4";
import memory4 from "../assets/videos/memory4.mp4";
import memory5 from "../assets/videos/memory5.mp4";
import memory6 from "../assets/videos/memory6.mp4";
import memory7 from "../assets/videos/memory7.mp4";
import memory8 from "../assets/videos/memory8.mp4";
import merory9 from "../assets/videos/merory9.mp4";



export const memoryVideoItems = [
  {
    id: 1,
    title: "First Date Memory",
    thumbnail: mem9,
    video: merory9
  },
  {
    id: 2,
    title: "A Rememberable New Year",
    thumbnail: mem8,
    video: memory4
  },
  {
    id: 3,
    title: "Some College Memories",
    thumbnail: mem3,
    video: memory8
  },
  {
    id: 4,
    title: "A Trip to Remember",
    thumbnail: mem7,
    video: memory3
  },
  {
    id: 5,
    title: "FEST!!!!",
    thumbnail: mem6,
    video: memory7
  }
  
];
// Load all images from assets/images
const imageModules = import.meta.glob("../assets/images/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default"
});

// Load all videos from assets/videos
const videoModules = import.meta.glob("../assets/videos/*.{mp4,webm,mov}", {
  eager: true,
  import: "default"
});

// Helper: convert filename to readable title
const toTitle = (path) => {
  const file = path.split("/").pop()?.split(".")[0] || "Untitled";
  return file
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

// Optional helper: sort by filename
const sortByPath = ([a], [b]) => a.localeCompare(b);

// All photos
export const allPhotos = Object.entries(imageModules)
  .sort(sortByPath)
  .map(([path, src], index) => ({
    id: index + 1,
    title: toTitle(path),
    image: src
  }));

// All videos
export const allVideos = Object.entries(videoModules)
  .sort(sortByPath)
  .map(([path, src], index) => ({
    id: index + 1,
    title: toTitle(path),
    thumbnail: allPhotos[index % (allPhotos.length || 1)]?.image || "",
    video: src,
    
  }));
// Add this inside: src/data/Memories.js



export const storyTimeline = [
  {
    id: 1,
    title: "The First Proposal From Kushagra",
    date: "10/12/2024",
    description: "That one message changed everything."
  },
  {
    id: 2,
    title: "Proposal From Yashita's Side",
    date: "29/03/2025",
    description: "It was so so so fucking shocking but then it was the best surprise ever. I was so happy"
  },
  {
    id: 3,
    title:"I proposed to Yashita again",
    date:"10/05/2025",
    description:"This was the most romantic moment of my life. I was so nervous but then it was the best moment of my life. I am so happy that she said yes"

  },
  {
    id:4 ,
    title: "First Date",
    date: "17/07/2025",
    description: "The best coffee of my life I had with you and then the most nervous makeout session of my life. I was so nervous."
  },
  
   
  {
    id: 5,
    title: "Favorite Memory",
    date: "Forever",
    description: "Every moment with you is the best one."
  }
];
