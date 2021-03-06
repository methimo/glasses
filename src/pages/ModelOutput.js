import React from "react";
import { NavLink } from "react-router-dom";

// styleの定義を追加
const styles = {
  link: {
    backgroundColor: "#fff",
    border: "solid 1px",
    borderColor: "#0000e7",
    borderRadius: "2px",
    color: "#0000e7",
    margin: "3px",
    padding: "8px",
    textDecoration: "none",
  },
  linkActive: {
    backgroundColor: "#3333e7",
    color: "#fff",
  },
};

function ModelOutput() {
  return (
    <div>
      <h1>3Dモデル出力</h1>
      <p>家具の配置をもとに部屋の3Dモデルを出力します</p>
      <p>
        Alt(MacOSの場合はOption)を押しながらドラッグで回転、Alt+Shift(Option+Shift)を押しながらドラッグで視点が平行移動します
      </p>
      <iframe
        id="Sumerian"
        title="Sumerian"
        src="https://ap-northeast-1.sumerian.aws/1d38503a93704f6a99202b7f3f82f00e.scene"
        width="100%"
        height="500px"
      ></iframe>
      <iframe
        id="Sumerian"
        title="Sumerian"
        src="https://ap-northeast-1.sumerian.aws/e8121b5f7f364082bf8df75dca3182d9.scene"
        width="100%"
        height="500px"
      ></iframe>
      <a href="https://ap-northeast-1.sumerian.aws/1d38503a93704f6a99202b7f3f82f00e.scene">
        <button>VRゴーグルを使う</button>
      </a>

      <p></p>
      <p>
        利用方法：Ocurusからこのページにアクセスし、「VRゴーグルを使う」ボタンを押してください
      </p>
      <p></p>
    </div>
  );
}

export default ModelOutput;
