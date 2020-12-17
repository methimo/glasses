import React from "react";
import { useEffect } from "react";

function SafetyCheck() {
  const Chairtop = 400;
  const Chairleft = 400;

  const Tabletop = 500;
  const Tableleft = 500;

  const Chesttop = 300;
  const Chestleft = 300;

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

  const defaultTodo = [
    { title: "----- 家具の配置から距離を算出します-----" },
    { title: "Chair <-> Tableの距離:" + distance1 },
    { title: "Chair <-> Chestの距離:" + distance2 },
    { title: "Chest <-> Tableの距離:" + distance3 },
    { title: "----- 距離による危険度判定-----" },
  ];
  const [todoList, setTodoList] = React.useState(defaultTodo);

  useEffect(() => {
    if (distance1 < 170) {
      const todo1 = {
        title: "Chair <-> Tableが近いです",
      };
      setTodoList([...todoList, todo1], () => {
        console.log("1");
      });
    }
    if (distance2 < 170) {
      const todo2 = {
        title: "Chair <-> Chestが近いです",
      };
      setTodoList([...todoList, todo2]);
    }

    if (distance3 < 170) {
      const todo3 = {
        title: "Chest <-> Tableが近いです",
      };
      setTodoList([...todoList, todo3]);
    }
    if (distance1 < 170 && distance2 < 170 && distance3 < 170) {
      const todo4 = {
        title: "家具の距離は十分に取れています",
      };
      setTodoList([...todoList, todo4]);
    }
  }, [setTodoList]);

  return (
    <div>
      <h1>家具配置の安全性チェック</h1>
      {todoList.map((todo) => (
        <p>{todo.title}</p>
      ))}
    </div>
  );
}

export default SafetyCheck;
