// Node.jsのすべてのAPIがプリロード処理で利用可能です。
// Chromeの拡張機能と同じサンドボックスを持っています。
window.addEventListener("DOMContentLoaded", () => {
  const { contextBridge, ipcRenderer } = require('electron/renderer')

  contextBridge.exposeInMainWorld('electronAPI', {
    setNavigate: (value) => ipcRenderer.send(value)
  })
});