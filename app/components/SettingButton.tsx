import Modal from "../ui/Modal";
import ThemeToggle from "./settings/ThemeToggle";
import { ColorPalette } from "./settings/ColorPalette";
import FontController from "./settings/FontController";
import LanguageToggle from "./settings/LanguageToggle";

import { Settings } from "lucide-react";
import FixedButton from "../ui/FixedButton";

export default function SettingButton() {
  return (
    <Modal
      label={
        <FixedButton className="bottom-32 md:bottom-12 -right-px md:right-6">
          <Settings />
        </FixedButton>
      }
      title="Customization"
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
