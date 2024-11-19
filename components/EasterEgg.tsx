import { useState } from "react";

export default function EasterEgg() {
  const [found, setFound] = useState(false);

  return (
    <div className="relative h-screen">
      {/* Hidden Clickable Easter Egg */}
      <div
        onClick={() => setFound(true)}
        className="absolute top-32 left-32 w-12 h-12 bg-yellow-400 rounded-full cursor-pointer"
      />
      {found && (
        <p className="absolute top-40 left-32 text-white font-bold">
          🎉 You found the Easter Egg!
        </p>
      )}
    </div>
  );
}
