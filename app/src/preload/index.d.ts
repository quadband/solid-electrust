import { ElectronAPI } from '@electron-toolkit/preload'
import type { helloFromRust } from "../../../native";

declare global {
  interface Window {
    electron: ElectronAPI;
    api: unknown;
    native: {
      helloFromRust
    };
  }
}
