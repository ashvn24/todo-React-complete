import React from "react";
import "./Todo.css";

function Items({ todo, setTodo,setInput,setEdit }) {

    
  const onDelete = (id) => {
    setTodo(todo.filter((to) => to.id !== id));
  };

  const onComplete = (id) => {
    const complete = todo.map((to) => {
      if (to.id === id) {
        return { ...to, status: !to.status };
      }
      return to;
    });
    setTodo(complete);
  };

  const onEdit=(id)=>{
    const edit= (todo.find((to)=>to.id===id))
    setInput(edit.list)
    setEdit(edit.id)
  }

  return (
    <div>
      <div>
        <ul className="items">
          {todo.map((to) => (
            <li className="list" id={to.status ? "to" : ""}>
              <div className="list-item">{to.list}</div>

              <span>
                <i
                  onClick={() => onComplete(to.id)}
                  id="tick"
                  class={
                    to.status
                      ? "key bi bi-file-earmark-plus-fill"
                      : "key bi bi-check-all"
                  }
                ></i>
                <i
                  onClick={() => onEdit(to.id)}
                  id="edit"
                  class="key bi bi-pencil-fill"
                ></i>
                <i
                  onClick={() => onDelete(to.id)}
                  id="trash"
                  class="key bi bi-trash-fill"
                ></i>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Items;
