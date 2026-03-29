"use client";
import { themes, useColorTheme } from "../../providers/ColorProvider";

export function ColorPalette() {
  const { colorTheme, setColorTheme } = useColorTheme();

  return (
    <div className="grid grid-cols-2 gap-2">
      {themes.map((t) => {
        const isActive = colorTheme === t.key;
        return (
          <button
            key={t.key}
            onClick={() => setColorTheme(t.key)}
            className={`flex flex-col gap-2 p-3 rounded-lg border transition text-left ${
              isActive
                ? "border-primary bg-primary/10"
                : "border-border hover:bg-muted"
            }`}
          >
            <div className="flex gap-1">
              {t.colors.map((color: string) => (
                <span
                  key={color}
                  className="w-5 h-5 rounded-full border border-black/10"
                  style={{ background: color }}
                />
              ))}
            </div>

            <div className="flex items-center justify-between text-sm font-medium">
              {t.name}
            </div>
          </button>
        );
      })}
    </div>
  );
}
