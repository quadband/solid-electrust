import { contextBridge } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';
import { helloFromRust } from "../../../native";

// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);
    contextBridge.exposeInMainWorld('native', { helloFromRust });
  } catch (error) {
    console.error(error)
  }
} else {
  // TODO: Change this dumb crap
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
  // @ts-ignore (define in dts) This is a terrible way to do things
  window.native = {
    helloFromRust
  };
}