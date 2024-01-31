import React,{ChangeEvent} from "react";

export interface Todos{
    text:string;
    color: string;
}

interface TodoListProps{
    todo: Todos[];
    onDelete: (index: number) => void;
    onEdit: (index: number, text: string) => void;
    onSave: (index: number) => void;
    editIndex: number | null;
    editText: string;
}

const TodoList: React.FC<TodoListProps> = ({ 
    todo, onDelete, onEdit,onSave, editIndex,editText})=>{
        return (
            <div style={{ width: "90%" }}>
              {/* Todo 아이템 목록 */}
              {todo.map((todoItem, index) => (
                <ul key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  {editIndex === index ? (
                    <li style={{ backgroundColor: todoItem.color,listStyle:"none", display:"flex",
                        alignItems: "center", justifyContent: "center", width:"600px",height:"40px", marginRight:"10px"}}>
                      <input
                        style={{fontSize:"medium"}}
                        type="text"
                        value={editText}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => onEdit(index, e.target.value)}
                      />
                    </li>
                  ) : (
                    <li style={{ backgroundColor: todoItem.color, listStyle:"none", display:"flex",
                        alignItems: "center", justifyContent: "center",marginRight:"10px",
                        width:"600px",height:"40px",borderRadius:"15px"}}>
                      <span style={{fontSize:"large"}}>{todoItem.text}</span>
                    </li>
                  )}
        
                  <div>
                    {editIndex === index ? (
                      <>
                        <button onClick={() => onSave(index)}>저장</button>
                      </>
                    ) : (
                      <button onClick={() => onEdit(index, todoItem.text)}>수정</button>
                    )}
                    <button onClick={() => onDelete(index)}>삭제</button>
                  </div>
                </ul>
              ))}
            </div>
        );
}
export default TodoList;
