"use client"
import TodoList from "./TodoList";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";


const App = () => {
  // const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);
  // const [todos, setTodos] = useState([]);

  // //loading localstorage
  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storedTodos) setTodos(storedTodos);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  // }, [todos]);

//   const toggleTodo = (i) => {
//     const newTodos = [...todos]
//     const todo = newTodos.find((todo) => todo.id === i)
//     todo.completed = !todo.completed
//     setTodos(newTodos)

//   }


//   const todoNameRef = useRef();

  
//   const handleAddTodo = () => {
//     const name = todoNameRef.current.value
//     if(name === "") return
//     setTodos((prev) => {
//       return [
//         ...prev, {id: uuidv4(), name: name, completed: false }
//       ]
//     })
//     todoNameRef.current.value = ""
//   }

// const handleClear = () => {
//   const newTodos = todos.filter((todo) => !todo)
//   setTodos(newTodos)
// }


  return (
    <>
    {/* <div className=" ">
      <input type="text" name="" id="" ref={todoNameRef} className="all mr-5 border  "/>
      <button onClick={handleAddTodo} className=" mr-5">タスクの追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク：{todos.filter((todo) => !todo.completed).length}</div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />

      </div> */}


      

    </>
  );
};

export default App;