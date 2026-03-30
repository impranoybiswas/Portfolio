"use client";
import { colors, useColorTheme } from "../../providers/ColorProvider";

export function ColorPalette() {
  const { colorTheme, setColorTheme } = useColorTheme();

  return (
    <div className="flex flex-wrap gap-2 w-full">
      {colors.map((c) => {
        const isActive = colorTheme === c.key;
        return (
          <button
            key={c.key}
            onClick={() => setColorTheme(c.key)}
            className={`flex flex-1 flex-col gap-2 p-2 rounded-lg border transition text-left cursor-pointer ${
              isActive
                ? "border-primary/50 bg-primary/10 shadow shadow-primary/10"
                : "border-primary/20 hover:bg-base-100 text-foreground/30"
            }`}
          >
            <div className="flex items-center justify-center gap-1">
              {c.colors.map((color: string) => (
                <span
                  key={color}
                  className="w-5 h-5 rounded-full border border-foreground/20"
                  style={{ background: color }}
                />
              ))}
            </div>

            <div className="flex items-center justify-center text-xs font-medium">
              {c.name}
            </div>
          </button>
        );
      })}
    </div>
  );
}
