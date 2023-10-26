import React from "react";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#646cff] flex items-center">
      <div className="w-screen">
        <h1 className="flex justify-center text-2xl lg:text-5xl">
          Turkey Weather App
        </h1>
        <Map />
        <Footer />
      </div>
    </div>
  );
}
