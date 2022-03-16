import { Clipboard, closeMainWindow } from "@raycast/api";
import { generatePan } from "./utils";

export default async () => {
  const pan = generatePan();

  await Clipboard.paste(pan);
  await closeMainWindow();
};