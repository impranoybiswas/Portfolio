"use client";

export default function Text() {
  const contents = ["hello", "world", "glow", "tailwind"];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const inner = e.currentTarget.querySelector(".inner") as HTMLDivElement;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (inner) {
      inner.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(34,211,238,0.15), #1f2937)`;
      inner.style.border = ".5px solid #22d3ee";
    }
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const inner = e.currentTarget.querySelector(".inner") as HTMLDivElement;
    if (inner) {
      inner.style.background = "";
      inner.style.border = "1px solid transparent";
    }
  };

  return (
    <section className="min-h-screen w-full flex justify-center items-center gap-20 bg-gray-900">
      <div className="flex flex-col gap-6">
        {contents.map((content, index) => (
          <div
            key={index}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-80 h-16 flex justify-center items-center relative rounded-md overflow-hidden
            transition-all duration-500 ease-in-out hover:scale-98 cursor-pointer p-[2px]"
          >
            <div
              className="inner bg-gray-800 w-full h-full rounded-md 
              text-cyan-300 flex items-center justify-center font-semibold 
              transition-all duration-300 ease-in-out"
            >
              {content}
            </div>
          </div>
        ))}
      </div>


      <div className="relative size-40 bg-blue-200 rounded-full mx-auto my-20">
  {Array.from({ length: 9 }).map((_, i) => {
    const angle = (i * 360) / 9; // 9 equal segments
    const radius = 80; // adjust based on parent size
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);

    return (
      <div
        key={i}
        className="size-4 bg-red-500 rounded-full absolute"
        style={{
          top: `calc(50% + ${y}px)`,
          left: `calc(50% + ${x}px)`,
          transform: "translate(-50%, -50%)",
        }}
      />
    );
  })}
</div>

    </section>
  );
}
