import Modal from "../ui/Modal";
import { IoSettingsOutline } from "react-icons/io5";
import ThemeToggle from "./settings/ThemeToggle";
import { ColorPalette } from "./settings/ColorPalette";

export default function SettingButton() {
  return (
    <Modal
      label={
        <div className="flex items-center gap-2">
          <IoSettingsOutline />
          <p>Setting</p>
        </div>
      }
      title="Customization"
    >
      <div className="flex flex-col gap-5 bg-background text-foreground">
        <div className="flex items-center justify-between">
          <p>Theme</p>
          <ThemeToggle />
        </div>
        <div className="flex items-center justify-between">
          <p>Color</p>
          <ColorPalette />
        </div>
      </div>
    </Modal>
  );
}
