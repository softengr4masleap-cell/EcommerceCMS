'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HeroSection() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/hero/getAll")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setHero(res.data[0]); // use first hero
        }
      })
      .catch((err) => {
        console.error("Error fetching hero:", err);
      });
  }, []);

  if (!hero) return <div>Loading...</div>;

  const withPx = (val, fallback) => {
    if (!val) return fallback;
    if (typeof val === "number") return `${val}px`;
    if (/^\d+$/.test(val)) return `${val}px`; 
    return val;
  };
  return (
    <div style={{ width: "100%" }}>
      <img
        src="./hero_banner.jpg"
        alt="Hero"
        style={{
          width: hero.width || "100%",
          height: withPx(hero.height, "500px"),
          objectFit: hero.objectCover ? "cover" : "contain",
          boxShadow: hero.shadow ? "0 8px 20px rgba(0,0,0,0.3)" : "none",
          borderRadius: hero.rounded ? "16px" : "0px",
          display: "block",
        }}
      />
    </div>
  );
}

