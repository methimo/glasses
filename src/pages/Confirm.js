import React from "react";
import { Link } from "react-router-dom";
import useAuthUser from "../hooks/useAuthUser";

function Confirm() {
  const { authUser } = useAuthUser();
  return (
    <div>
      <h1>購入確認</h1>
      <table border="1">
        <tr>
          <td>
            <h5>お支払い方法</h5>
          </td>
          <td>
            <h5>送付先</h5>
          </td>
        </tr>
        <tr>
          <td>
            クレジットカード<br></br>
            <select name="howtopay">
              <option value="VISA 下4桁 0001">VISA 下4桁 0001</option>
              <option value="その他のカードを使う">その他のカードを使う</option>
            </select>
            <br></br>
            支払い回数<br></br>
            <select name="howtopay">
              <option value="一括払い">一括払い</option>
              <option value="リボ払い">リボ払い</option>
              <option value="3回">3回</option>
              <option value="5回">5回</option>
              <option value="10回">10回</option>
              <br></br>
            </select>
          </td>
          <td>
            <p>{authUser.displayName}</p>
            〒105-0011<br></br>
            東京都港区芝公園４丁目２−８<br></br>
            東京タワー　３F<br></br>
          </td>
        </tr>
      </table>
      <p style={{ fontSize: "80%" }}>
        登録情報をご確認ください。<br></br>
        「確定」ボタンをクリックいただきますとご購入が確定します。
      </p>
      <Link to="/exec" style={{ fontSize: "120%" }}>
        <button>確定</button>
      </Link>
      <p></p>
    </div>
  );
}

export default Confirm;
