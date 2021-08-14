import { app, BrowserWindow } from "electron";
import * as h5 from "@ddll/h5";
import * as vite from "vite";
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // win.loadFile("./src/index.html");
  h5.run().then((viteConfig) => {
    const vConfig: vite.ViteDevServer = viteConfig as any;
    win.loadURL("http://localhost:" + vConfig.config.server.port);
    win.webContents.openDevTools();
  });
}
app.whenReady().then(() => {
  createWindow();
});
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
