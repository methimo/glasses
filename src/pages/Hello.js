import { Link } from "react-router-dom";
import useAuthUser from "../hooks/useAuthUser";
import LogoutButton from "../components/LogoutButton";
import Chair from "../images/chair.png";
import Table from "../images/table.png";
import Chest from "../images/chest.png";
import Room from "../images/parse.jpg";
import MoveChair from "../components/MoveChair";
import MoveTable from "../components/MoveTable";
import MoveChest from "../components/MoveChest";

function Hello() {
  const { authUser } = useAuthUser();
  return (
    <div>
      <head>
        <title>Hello VR room tour</title>
      </head>

      <h3>Hello!! {authUser.displayName}さん </h3>
      <div>
        <img src={authUser.photoURL} alt="icon" width="60" height="60" />
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
          <td>50*80*120</td>
          <td>¥9000</td>
          <td>
            <img src={Chest} art="chest" width="70" height="70" />
          </td>
        </tr>
      </table>

      <h3>選択した図面</h3>
      <img src={Room} art="chest" width="1000" height="500" />
      <MoveChair />
      <MoveTable />
      <MoveChest />
    </div>
  );
}

export default Hello;
