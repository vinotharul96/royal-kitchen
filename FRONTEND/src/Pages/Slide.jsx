import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Friuts",
    subtitle: "Healthy Fruits for Your Special Day",
    bg: "https://png.pngtree.com/png-clipart/20240628/original/pngtree-beautiful-mix-fruits-composition-png-image_15429658.png",
    titleStyle: { color: "#ff6a3d", fontFamily: "'Playfair Display', serif", fontSize: "3.5rem" },
    subtitleStyle: { color: "#fff0f5", fontFamily: "'Roboto', sans-serif", fontSize: "1.5rem" },
  },
  {
    title: "Dairyproducts",
    subtitle: "Pure Milk Varieties for Children's Nutrition",
    bg: "https://wallpaperaccess.com/full/10784906.png",
    titleStyle: { color: "#8b3a62", fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem" },
    subtitleStyle: { color: "#fce4ec", fontFamily: "'Roboto', sans-serif", fontSize: "1.4rem" },
  },
  {
    title: "Nuts",
    subtitle: "The Best Types of Boosters for Physical Health",
    bg:  "https://tse3.mm.bing.net/th/id/OIP.HlfM-oXitHwJ4-vmHQCT6gHaHa?pid=Api&h=220&P=0",
    titleStyle: { color: "#3e1f2b", fontFamily: "'Lora', serif", fontSize: "3.2rem" },
    subtitleStyle: { color: "#ffe4e1", fontFamily: "'Roboto', sans-serif", fontSize: "1.5rem" },
  },
  {
    title: "Snacks",
    subtitle: "Delicious Snacks for Leisure",
    bg: "https://partnersinfire.com/wp-content/uploads/2023/06/variety-of-chips.jpg.webp",
    titleStyle: { color: "#ff69b4", fontFamily: "'Dancing Script', cursive", fontSize: "3.5rem" },
    subtitleStyle: { color: "#fffaf0", fontFamily: "'Roboto', sans-serif", fontSize: "1.5rem" },
  },
  {
    title: "Vegetableoil",
    subtitle: "Celebrate foods prepared in pure oil",
    bg: "https://www.vikmarfoods.com/wp-content/uploads/2025/01/Healthy-Cooking-Oils.jpg",
    titleStyle: { color: "#ffa500", fontFamily: "'Playfair Display', serif", fontSize: "3.5rem" },
    subtitleStyle: { color: "#fff8dc", fontFamily: "'Roboto', sans-serif", fontSize: "1.5rem" },
    },
  {
    title: "Vegetables",
    subtitle: "Make your cooking delicious with fresh vegetables",
    bg: "https://static.vecteezy.com/system/resources/previews/023/029/271/large_2x/group-of-vegetables-top-view-with-aesthetic-arrangement-black-background-photo.jpg",
    titleStyle: { color: "#ff1493", fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem" },
    subtitleStyle: { color: "#ffe4e1", fontFamily: "'Roboto', sans-serif", fontSize: "1.5rem" },
  },
];

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else {
        navigate("/home"); 
      }
    }, 5000); 
    return () => clearTimeout(timer);
  }, [currentSlide, navigate]);

  const slide = slides[currentSlide];

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: `url(${slide.bg}) center/cover no-repeat`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        transition: "background 0.8s ease-in-out",
      }}
    >
      <h1
        style={{
          ...slide.titleStyle,
          marginBottom: "15px",
          textShadow: "2px 2px 10px rgba(0,0,0,0.6)",
        }}
      >
        {slide.title}
      </h1>
      <p
        style={{
         ...slide.subtitleStyle,
          maxWidth: "600px",
          textShadow: "1px 1px 8px rgba(0,0,0,0.5)",
        }}
      >
        {slide.subtitle}
      </p>

     
      <div style={{ display: "flex", gap: "8px", marginTop: "30px" }}>
        {slides.map((_, idx) => (
          <div
            key={idx}
            style={{
              width: currentSlide === idx ? "24px" : "12px",
              height: "12px",
              borderRadius: "6px",
              background: currentSlide === idx ? "#ff6a3d" : "#fff",
              opacity: currentSlide === idx ? 1 : 0.5,
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slide