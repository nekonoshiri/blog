import path from "node:path";

export default {
  meta: {
    type: "const",
    value: {
      pluginName: "simple-filepath-plugin",
      description: "ファイルパス操作用の簡易プラグイン。",
      pluginVersion: "0.0.0",
      nakoRuntime: ["cnako"],
      nakoVersion: "3.7.8",
    },
  },

  ファイルパス結合: {
    // `node:path` モジュールの `join` 関数を用いてファイルパスを結合します。 // @ふぁいるぱすけつごう
    type: "func",
    josi: [["と", "を"]],
    isVariableJosi: true,
    fn: function (...paths) {
      paths.pop(); // 可変長引数の最後の要素はシステム変数 (`sys`) なので取り除いておく
      return path.join(...paths);
    },
  },
};
