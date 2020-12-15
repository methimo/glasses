import React from "react";
import { Link } from "react-router-dom";

function Exec() {
  return (
    <div>
      <h1>購入確定</h1>
      {/* 購入完了画面をお願いします！ */}

      <Link to="/hello">戻る</Link>
    </div>
  );
}

export default Exec;
