"use client";

import { fonts, useFont } from "@/app/providers/FontProvider";

export default function FontController() {
  const { font, setFont } = useFont();
  return (
    <div className="flex flex-wrap gap-2 w-full">
      {fonts.map((f) => (
        <button
          key={f.value}
          onClick={() => {
            setFont(f.value);
          }}
          className={`flex items-center justify-between px-4 py-2 rounded-lg border border-secondary/30 transition text-sm cursor-pointer ${
            font === f.value
              ? "border-primary bg-primary/10 text-primary"
              : "border-border hover:bg-muted"
          }`}
        >
          <span style={{ fontFamily: f.value }}>{f.name}</span>
          {font === f.value && <span className="text-xs text-primary pl-1">✓</span>}
        </button>
      ))}
    </div>
  );
}
