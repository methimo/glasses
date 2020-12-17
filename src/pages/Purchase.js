import React from "react";
import { Link } from "react-router-dom";
import Chair from "../images/chair.png";
import Table from "../images/table.png";
import Chest from "../images/chest.png";

function Purchase() {
  return (
    <div>
      <h1>ご注文商品</h1>
      <h4>こちらの家具を購入します</h4>
      <table border="1" style={{ width:'60%' }}>
        <tr>
          <td>
            <p style={{ textAlign: 'center',}}><img src={Chair} alt="chair" width="70" height="70" /></p>
          </td>
          <td>
            <u>ダイニングチェア</u><br></br>
            40*40*60 cm<br></br>
            <br></br>
            <p style={{ textAlign: 'right' }}>¥3000</p>
          </td>
        </tr>
        <tr>
          <td>
          <p style={{ textAlign: 'center' }}><img src={Table} alt="table" width="70" height="70" /></p>
          </td>
          <td>
            <u>ダイニングテーブル</u><br></br>
            90*120*100 cm
          <p style={{ textAlign: 'right' }}>¥10000</p>
          </td>
        </tr>
        <tr>
          <td>
          <p style={{ textAlign: 'center' }}><img src={Chest} alt="chest" width="70" height="70" /></p>
          </td>
          <td>
            <u>タンス</u><br></br>
            50*80*120 cm
          <p style={{ textAlign: 'right' }}>¥9000</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <h4 style={{ textAlign: 'right',}}><u>合計 ： ¥9000</u></h4>
        </tr>
      </table>
      
      <Link to="/confirm"　style={{fontSize: '120%'}}><button>購入確認</button></Link>
    </div>
  );
}

export default Purchase;
