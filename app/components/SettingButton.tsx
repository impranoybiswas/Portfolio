import Modal from "../ui/Modal";
import ThemeToggle from "./settings/ThemeToggle";
import { ColorPalette } from "./settings/ColorPalette";
import FontController from "./settings/FontController";
import LanguageToggle from "./settings/LanguageToggle";

import { Settings } from "lucide-react";

export default function SettingButton() {
  return (
    <Modal
      label={
        <Settings className="group-hover:rotate-12 transition-transform duration-300" />
      }
      title={
        <div className="flex items-center gap-2">
          <Settings className="size-5 text-primary animate-pulse" />
          <span>Customization</span>
        </div>
      }
    >
      <div className="flex flex-col gap-5 bg-background text-foreground text-base md:text-lg">
        <div className="flex items-center justify-between bg-base-200/50 border border-foreground/5 rounded-xl p-4">
          <p>Dark Theme</p>
          <ThemeToggle />
        </div>
        <div className="flex items-center justify-between bg-base-200/50 border border-foreground/5 rounded-xl p-4">
          <p>
            <span className="hidden md:inline">Change</span> Language
          </p>
          <LanguageToggle />
        </div>

        <div className="flex flex-col items-start justify-between bg-base-200/50 border border-foreground/5 rounded-xl p-4">
          <p className="w-full border-b border-foreground/20 pb-2 mb-4">
            Choice Color Palette
          </p>
          <ColorPalette />
        </div>
        <div className="flex flex-col items-start justify-between bg-base-200/50 border border-foreground/5 rounded-xl p-4">
          <p className="w-full border-b border-foreground/20 pb-2 mb-4">
            Choice Font Family
          </p>
          <FontController />
        </div>
      </div>
    </Modal>
  );
}
