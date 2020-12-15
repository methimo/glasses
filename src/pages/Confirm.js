import React from "react";
import { Link } from "react-router-dom";

function Confirm() {
  return (
    <div>
      <h1>購入確認</h1>
      {/* 購入確認画面をお願いします！ */}

      <Link to="/exec">確定</Link>
    </div>
  );
}

export default Confirm;
