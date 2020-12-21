import { Link } from "react-router-dom";
import useAuthUser from "../hooks/useAuthUser";
import useChairInfo from "../hooks/useChairInfo";
import LogoutButton from "../components/LogoutButton";
import Chair from "../images/chair.png";
import Table from "../images/table.png";
import Chest from "../images/chest.png";
import Room from "../images/parse.jpg";
import MoveChair from "../components/MoveChair";
import MoveTable from "../components/MoveTable";
import MoveChest from "../components/MoveChest";
import React from "react";

function Hello() {
  const { authUser } = useAuthUser();
  const { ChairInfo } = useChairInfo();
  console.log(ChairInfo.top);
  /*  setChairInfo({ top: 777, left: 755 });*/
  /* console.log(setChairInfo.top);*/
  return (
    <div>
      <head>
        <title>VR room tour</title>
      </head>
      <h2>Welcome to VR roomtour </h2>
      <h4>Hello!! {authUser.displayName}さん</h4>
      <div>
        <img src={authUser.photoURL} alt="icon" width="50" height="50" />
      </div>
      {/*} <p>
        <Link to="/hello">hello</Link>
  </p>*/}

      <h3>家具一覧</h3>
      <table border="1">
        <tr>
          <th>家具名</th>
          <th>大きさ</th>
          <th>値段</th>
          <th>画像</th>
        </tr>
        <tr>
          <td>ダイニングチェア</td>
          <td>40*40*60</td>
          <td>¥3000</td>
          <td>
            <img src={Chair} art="chair" width="70" height="70" />
          </td>
        </tr>
        <tr>
          <td>ダイニングテーブル</td>
          <td>90*120*100</td>
          <td>¥10000</td>
          <td>
            <img src={Table} art="table" width="70" height="70" />
          </td>
        </tr>
        <tr>
          <td>タンス</td>
          <td>50*80*100</td>
          <td>¥9000</td>
          <td>
            <img src={Chest} art="chest" width="70" height="70" />
          </td>
        </tr>
      </table>

      <h3>家具の配置</h3>
      <img src={Room} art="chest" width="1000" height="500" />
      <p>
        chair:
        <MoveChair />
      </p>
      <p>
        table:
        <MoveTable />
      </p>
      <p>
        chest:
        <MoveChest />
      </p>
    </div>
  );
}

export default Hello;
