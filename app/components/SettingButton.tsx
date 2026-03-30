import Modal from "../ui/Modal";
import { IoSettingsOutline } from "react-icons/io5";
import ThemeToggle from "./settings/ThemeToggle";
import { ColorPalette } from "./settings/ColorPalette";
import FontController from "./settings/FontController";

export default function SettingButton() {
  return (
    <Modal label={<IoSettingsOutline />} title="Customization">
      <div className="flex flex-col gap-5 bg-background text-foreground text-lg">
        <div className="flex items-center justify-between bg-base-200/50 border border-foreground/5 rounded-xl p-4">
          <p>Theme</p>
          <ThemeToggle />
        </div>
        <div className="flex flex-col items-start justify-between bg-base-200/50 border border-foreground/5 rounded-xl p-4">
          <p className="w-full border-b border-foreground/20 pb-2 mb-4">Choice your color</p>
          <ColorPalette />
        </div>
        <div className="flex flex-col items-start justify-between bg-base-200/50 border border-foreground/5 rounded-xl p-4">
          <p className="w-full border-b border-foreground/20 pb-2 mb-4">Choice your font</p>
          <FontController />
        </div>
      </div>
    </Modal>
  );
}
