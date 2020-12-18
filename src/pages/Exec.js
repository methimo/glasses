import React from "react";
import { Link } from "react-router-dom";
import useAuthUser from "../hooks/useAuthUser";

function Exec() {
  const { authUser } = useAuthUser();
  return (
    <div>
      <h1>購入確定</h1>
      <h5 style={{ paddingBottom: "10px", paddingLeft: "30px" }}>
        ご注文ありがとうございます。
        <br></br>
        <br></br>
        {authUser.displayName} 様のご注文コードは P000000001 となります。
      </h5>
      <Link to="/hello" style={{ fontSize: "120%" }}>
        <button>戻る</button>
      </Link>
      <p></p>
    </div>
  );
}

export default Exec;
