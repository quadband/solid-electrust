"use strict";
const electron = require("electron");
const preload = require("@electron-toolkit/preload");
const native = require("./chunks/index.darwin-x64-MNK9-LcP.node");
const { helloFromRust } = native;
const api = {};
if (process.contextIsolated) {
  try {
    electron.contextBridge.exposeInMainWorld("electron", preload.electronAPI);
    electron.contextBridge.exposeInMainWorld("api", api);
    electron.contextBridge.exposeInMainWorld("native", { helloFromRust });
  } catch (error) {
    console.error(error);
  }
} else {
  window.electron = preload.electronAPI;
  window.api = api;
  window.native = {
    helloFromRust
  };
}
