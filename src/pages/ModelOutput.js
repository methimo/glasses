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
      <h1>ModelOutput</h1>
      <p>ModelOutput</p>

      <iframe
        id="Sumerian"
        title="Sumerian"
        src="https://ap-northeast-1.sumerian.aws/1002d821add74d5f8bb46f1a2ae8679c.scene"
        width="100%"
        height="500px"
      ></iframe>

      <NavLink
        style={styles.link}
        activeStyle={styles.linkActive}
        to="/modelvr"
      >
        VRで暮らしてみる
      </NavLink>
    </div>
  );
}

export default ModelOutput;
