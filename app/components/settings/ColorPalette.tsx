"use client";
import { colors, useColorTheme } from "../../providers/ColorProvider";

export function ColorPalette() {
  const { colorTheme, setColorTheme } = useColorTheme();

  return (
    <div className="grid grid-cols-2 gap-2">
      {colors.map((c) => {
        const isActive = colorTheme === c.key;
        return (
          <button
            key={c.key}
            onClick={() => setColorTheme(c.key)}
            className={`flex flex-col gap-2 p-3 rounded-lg border transition text-left ${
              isActive
                ? "border-primary bg-primary/10"
                : "border-border hover:bg-muted"
            }`}
          >
            <div className="flex gap-1">
              {c.colors.map((color: string) => (
                <span
                  key={color}
                  className="w-5 h-5 rounded-full border border-black/10"
                  style={{ background: color }}
                />
              ))}
            </div>

            <div className="flex items-center justify-between text-sm font-medium">
              {c.name}
            </div>
          </button>
        );
      })}
    </div>
  );
}
