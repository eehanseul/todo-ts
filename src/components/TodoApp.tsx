import React, { useState } from "react";
import TodoList, {Todos} from "./TodoList";
// {}는 export한 요소들 가져옴
// export default한 중괄호 없이 가져올 수 있음

export default function Todo() {
  const [inputText, setInputText] = useState<string>("");
  const [selectColor, setSelectColor] = useState<string>("pink");
  const [todos, setTodo] = useState<Todos[]>([]);

  const [editIndex,setEditIndex]=useState<number | null>(null);
  const [editText, setEditText]=useState<string>("");

  const clickColor = (color:string) => {
    setSelectColor(color);
  };
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const clickButton = () => {
    //입력창 비어있으면 return
    if (inputText.trim() === "") {
      return;
    }

    //새로운 todo
    const newTodo = {
      text: inputText,
      color: selectColor,
    };

    //기존 todo 배열에 새로운 todo 더함
    setTodo([...todos, newTodo]);
    setInputText("");
    setEditIndex(null);
    setEditText("");
  };

  //todo list 삭제
  const deleteTodo = (index:number) => {
    const updatedTodo = [...todos];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
    setEditIndex(null);
    setEditText("");
  };

  //todo list 수정
  const editTodo = (index: number,text: string) => {
    setEditIndex(index);
    setEditText(text);
  };

  const handelSave = (index: number) => {
    //수정 내용 저장
    const updatedTodo = [...todos];
    updatedTodo[index].text = editText;
    setTodo(updatedTodo);
    setEditIndex(null);
    setEditText("");
  };
 

  return (
    <div style={{ textAlign: "center"}}>
      <h1>Todo App</h1>
      {/* 입력창 */}
      <div>
        <input
          type="text"
          value={inputText}
          onChange={inputChange}
          style={{ backgroundColor: selectColor, marginRight:"10px", height:"30px", fontSize:"medium" }}
        />
        <button onClick={() => clickButton()}>입력</button>
      </div>

      {/* 색상 선택 영역 */}
      <div style={{ marginTop: "20px", marginBottom:"45px" }}>
        {["#87CEEB", "#FFA07A", "yellow","pink"].map((color) => (
          <span
            key={color}
            style={{
              backgroundColor: color,
              padding: "8px",
              cursor: "pointer",
              marginRight: "10px",
            }}
            onClick={() => clickColor(color)}
          ></span>
        ))}
      </div>

      {/* Todo-list */}
      <TodoList todo={todos} onDelete={deleteTodo} onEdit={editTodo} onSave={handelSave} 
        editIndex={editIndex} editText={editText}/>
      
    </div>
  );
}
