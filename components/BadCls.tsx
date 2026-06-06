"use client";

import { useEffect, useState } from "react";

export default function BadCLS() {
  const [height, setHeight] = useState(50);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeight(1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        height,
        transition: "all 0.1s",
      }}
      className="bg-red-500"
    >
      Dynamic Banner
    </div>
  );
}