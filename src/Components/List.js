import React ,{useState, useEffect}from 'react'
import './Todo.css'
import Items from './Items'

function List({Input, setInput}) {
    const initial = JSON.parse(localStorage.getItem("todo"))||[]

     

    const [todo, setTodo] = useState(initial)
    const [edit, setEdit] = useState(null)

    const addTodo=(event)=>{
        event.preventDefault();
        const todoExists= todo.find((to)=>to.list===Input);
        if (todoExists){
          alert('Item already exists')
          return;
        }
        if (Input!==''){
            setTodo([...todo,{id:Date.now(), list:Input, status:false}])
            setInput('');
        }
        if (edit){
          const editTodo = todo.map((to)=>to.id===edit?(to={id:to.id,list:Input}):(to={id:to.id,list:to.list}));
          setTodo(editTodo)
          setInput('')
          setEdit(null)
        }
    }
    useEffect(()=>{
      localStorage.setItem("todo",JSON.stringify(todo));
    },[todo]);

  return (
    <div>
      <form onSubmit={addTodo}>
        <div className='group'>
        <input className={edit?'text2':'text'} type="text" value={Input} placeholder='Enter your todo' onChange={(event)=>setInput(event.target.value)} />
        <button className={`btns btn mb-1 ms-2 text-light  ${edit?'btn-warning':'btn-success'} btn-sm`}>{edit?'UPDATE':'ADD'}</button>
        </div>
    </form>   
        <div>
            <Items todo={todo} setTodo={setTodo} setInput={setInput} setEdit={setEdit}/>
        </div>
      
    </div>
  )
}

export default List
