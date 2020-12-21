import React from "react";
import { useEffect } from "react";

function SafetyCheck() {
  const Chairtop = 100;
  const Chairleft = 150;

  const Tabletop = 150;
  const Tableleft = 100;

  const Chesttop = 100;
  const Chestleft = 200;

  const Chestheight = 100;
  const Childhand = 120;

  const distance1 = Math.pow(
    Math.pow(Chairtop - Tabletop, 2) + Math.pow(Chairleft - Tableleft, 2),
    1 / 2
  ).toFixed(2);

  const distance2 = Math.pow(
    Math.pow(Chairtop - Chesttop, 2) + Math.pow(Chairleft - Chestleft, 2),
    1 / 2
  ).toFixed(2);

  const distance3 = Math.pow(
    Math.pow(Chesttop - Tabletop, 2) + Math.pow(Chestleft - Tableleft, 2),
    1 / 2
  ).toFixed(2);

  let defaultTodo = [
    { title: "----- 家具間の距離による危険度判定を行います-----" },
    { title: "イス <-> テーブルの距離:" + distance1 + "cm" },
    { title: "イス <-> タンスの距離:" + distance2 + "cm" },
    { title: "テーブル <-> タンスの距離:" + distance3 + "cm" },
  ];

  if (distance1 < 50) {
    const todo1 = {
      title: "  イス と テーブルの距離が近いです。",
    };
    defaultTodo.push(todo1);
  }

  if (distance2 < 70) {
    const todo2 = {
      title:
        "  イス と タンスの距離が近いです。このままでは子供が挟まれてしまう可能性があります。",
    };
    defaultTodo.push(todo2);
  }

  if (distance3 < 70) {
    const todo3 = {
      title:
        "  テーブル と タンスの距離が近いです。このままでは子供が挟まれてしまう可能性があります。",
    };
    defaultTodo.push(todo3);
  }

  if (distance1 > 50 && distance2 > 70 && distance3 > 70) {
    const todo4 = {
      title: "  家具の距離は十分に取れています。",
    };
    defaultTodo.push(todo4);
  }

  let checklist = [
    {
      title:
        "----- 家具の大きさと子供の手の届く範囲から危険な箇所を判定します-----",
    },
    { title: "  タンスの高さ:" + Chestheight + "cm" },
    { title: "  子供の手の届く高さ:" + Childhand + "cm" },
  ];

  if (Chestheight < Childhand) {
    const todo6 = {
      title:
        "  タンスの上のものに手が届いてしまいます！タンスの上には危険なものを置かないようにすることをお勧めします。",
    };
    checklist.push(todo6);
  }

  return (
    <div>
      <h1>家具配置の安全性チェック</h1>
      <p>
        家具の配置、大きさから部屋内の思わぬ事故が発生しうる場所を判定します
      </p>
      <p>※注意：本機能は部屋内の事故を完全に防ぐものではありません</p>
      {defaultTodo.map((todo) => (
        <p>{todo.title}</p>
      ))}
      {checklist.map((todo) => (
        <p>{todo.title}</p>
      ))}
    </div>
  );
}

export default SafetyCheck;
