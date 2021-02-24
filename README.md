# sample extension

## overview

卒業論文に掲載するサンプルとして作成したchrome extension。
機能などはなく、popup、content、backgroundの動作や、cssの適用などを行うサンプル。

## how to install

```
// 依存パッケージのインストール
$ npm install

// ビルド
$ npm run build
```

ChromeExtensionに追加

1. [拡張機能の管理画面](chrome://extensions/)にて、デベロッパーモードへ切り替えを行う。
2. `パッケージ化されていない拡張機能`ボタンより、本ディレクトリ(`sample-extension`)を選択する。
3. 拡張機能の一覧に`sample extension`追加されれば、本拡張機能が利用できる。