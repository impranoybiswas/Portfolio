"use client";

export default function Toggle({onClick, isToggled}: {onClick: () => void , isToggled: boolean}) {
  return (
    <button
      onClick={onClick}
      className={`w-[50px] rounded-full bg-foreground/5 border border-primary/30 flex items-center justify-start p-[2px] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer`}
    >
      <span
        className={`size-5 rounded-full bg-linear-to-br from-primary to-secondary ${isToggled ? "translate-x-6" : "translate-x-0"} transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]`}
      ></span>
    </button>
  );
}
