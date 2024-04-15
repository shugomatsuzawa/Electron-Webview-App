# DEMO : Electron Webview App テンプレート

Webアプリをデスクトップアプリとして配布できます。
## ローカルで実行する
1. node.jsおよびnpm等のパッケージマネージャーを等のパッケージマネージャーをインストールします。
1. 次のコマンドを実行して、リポジトリをクローンします。
    ```sh
    git clone git@github.com:shugomatsuzawa/Electron-Webview-App.git;
    cd ./Electron-Webview-App
    ```
1. 次のコマンドを実行して、依存関係をインストールします。
    ```sh
    npm install
    ```
1. 次のコマンドを実行して、開発環境を起動します。
    ```sh
    npx electron ./src
    ```
Electronについてご不明な点がある場合は、[Electronのドキュメント](https://www.electronjs.org/ja/docs/latest/)ご覧ください。
## カスタマイズする
...準備中...
## 配布する
プロジェクトディレクトリで次のコマンドを実行します。
### macOS
例：Apple M1以降のチップを搭載したMacの場合
```sh
npx electron-packager src ElectronWebviewApp --platform=darwin --arch=arm64 --overwrite
```
### Windows
例：
```sh
npx electron-packager src ElectronWebviewApp --platform=win32 --arch=x64 --overwrite
```
## 貢献する
バグを見つけた場合は、[GitHub Issues](https://github.com/shugomatsuzawa/Facial-Paralysis-Care/issues)からできるだけ詳しい再現手順を教えていただけると助かります。
感想などありましたら私の[Webサイト](https://shugomatsuzawa.com/contact/)やソーシャルメディアからお気軽にご連絡ください。
