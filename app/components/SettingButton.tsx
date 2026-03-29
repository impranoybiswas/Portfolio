import Modal from "../ui/Modal";
import { IoSettingsOutline } from "react-icons/io5";
import ThemeToggle from "./settings/ThemeToggle";
import { ColorPalette } from "./settings/ColorPalette";

export default function SettingButton() {
  return (
    <Modal label={<IoSettingsOutline />} title="Customization">
      <div className="flex flex-col gap-5 bg-background text-foreground">
        <div className="flex items-center justify-between bg-base-200 border border-foreground/5 rounded-xl p-5">
          <p>Theme</p>
          <ThemeToggle />
        </div>
        <div className="flex items-start justify-between bg-base-200 border border-foreground/5 rounded-xl p-5">
          <p>Color</p>
          <ColorPalette />
        </div>
      </div>
    </Modal>
  );
}
