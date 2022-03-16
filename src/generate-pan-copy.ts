import { Clipboard, showHUD } from "@raycast/api";
import { generatePan } from "./utils";

export default async () => {
  const pan = generatePan();

  await Clipboard.copy(pan);
  await showHUD(`✅ Copied: ${pan}`);
};
