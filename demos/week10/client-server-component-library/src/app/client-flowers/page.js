"use client";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function ClientFlowers() {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    async function getFlowers() {
      const response = await fetch("http://localhost:3000/api/flowers");
      const flowers = await response.json();
      setFlowers(flowers);
    }
    getFlowers();
  }, []);

  return (
    <>
      {flowers.map((flower) => (
        <div key={flower.id}>
          <Image
            src={flower.flower_image}
            alt={flower.flower_name}
            width={100}
            height={200}
          />
          <h2>{flower.flower_name}</h2>
          <p>{flower.flower_location}</p>
        </div>
      ))}
      <Footer />
    </>
  );
}
