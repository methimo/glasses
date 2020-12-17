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

function Bottom() {
  return (
    <div>
      {/* style属性とactiveStyle属性を追加 */}
      <NavLink style={styles.link} activeStyle={styles.linkActive} to="/hello">
        TopMenu
      </NavLink>
      <NavLink
        style={styles.link}
        activeStyle={styles.linkActive}
        to="/safetycheck"
      >
        安全性チェック
      </NavLink>
      <NavLink
        style={styles.link}
        activeStyle={styles.linkActive}
        to="/purchase"
      >
        選択した家具を購入
      </NavLink>
      <NavLink
        style={styles.link}
        activeStyle={styles.linkActive}
        to="/modeloutput"
      >
        3Dモデル出力
      </NavLink>
    </div>
  );
}

export default Bottom;
