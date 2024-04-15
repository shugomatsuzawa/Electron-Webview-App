// アプリケーション作成用のモジュールを読み込み
const { app, BrowserWindow, BrowserView, ipcMain } = require("electron");
const path = require("path");

// メインウィンドウ
let mainWindow;

const createWindow = () => {
  // メインウィンドウを作成します
  const win = new BrowserWindow({
    width: 1280,
    height: 900,
    titleBarStyle: 'hiddenInset',
    titleBarOverlay: true,
    webPreferences: {
      // プリロードスクリプトは、レンダラープロセスが読み込まれる前に実行され、
      // レンダラーのグローバル（window や document など）と Node.js 環境の両方にアクセスできます。
      preload: path.join(__dirname, "preload.js"),
    },
    useContentSize: true
  });

  // メインウィンドウに表示するURLを指定します
  // （今回はmain.jsと同じディレクトリのindex.html）
  win.loadFile("index.html");

  const view = new BrowserView()
  win.setBrowserView(view)
  const bound = win.getBounds();
  view.setBounds({ x: 0, y: 40, width: bound.width, height: bound.height - 40 })
  // view.setAutoResize({width: true, height: true})
  view.setAutoResize({ width: true, height: true}); 
  view.webContents.loadURL('https://electronjs.org')

  ipcMain.on('BACK', () => {
    if (view.webContents.canGoBack()) {
      view.webContents.goBack();
    }
  });
  
  ipcMain.on('FORWARD', () => {
    if (view.webContents.canGoForward()) {
      view.webContents.goForward();
    }
  });
  
  ipcMain.on('RELOAD', () => {
    view.webContents.reload();
  });

  // デベロッパーツールの起動
  win.webContents.openDevTools('window');

  // メインウィンドウが閉じられたときの処理
  win.on("closed", () => {
    win = null;
  });
};

//  初期化が完了した時の処理
app.whenReady().then(() => {
  createWindow();

  // アプリケーションがアクティブになった時の処理(Macだと、Dockがクリックされた時）
  app.on("activate", () => {
    // メインウィンドウが消えている場合は再度メインウィンドウを作成する
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 全てのウィンドウが閉じたときの処理
app.on("window-all-closed", () => {
  // macOSのとき以外はアプリケーションを終了させます
  if (process.platform !== "darwin") {
    app.quit();
  }
});