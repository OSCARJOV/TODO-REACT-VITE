import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Header from "./components/Header";
import TodoComputer from "./components/TodoComputer";
import TodoCreate from "./components/TodoCreate";
import Todolist from "./components/TodoList";

// const initialState = [
//   {
//     id: 1, title: "Tarea 1", completed: true
//   },
//   {
//     id: 2, title: "Tarea 2", completed: false
//   },
//   {
//     id: 3, title: "Tarea 3", completed: true
//   },
//   {
//     id: 4, title: "Tarea 4", completed: false
//   },
// ]

const initialState = JSON.parse(localStorage.getItem("todos")) || []  // con esto reemplazo ese array y lo saco del storage

const App = () => {

  
  const [todos, setTodos] = useState(initialState)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) =>{
    const newtodo = {
      id: Date.now(), 
      title,
      completed: false,
    }

    setTodos([...todos, newtodo])

  };


const removeTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};


const updateTodo = (id) => {
  setTodos(todos.map(
    todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
}

const conterItem = todos.filter((todo) => !todo.completed).length;

const clearComplete = () => {
  setTodos(todos.filter((todo) => !todo.completed))
}


const [filter, setFilter] = useState("all");

const changeFilter = (filter) => setFilter(filter);
  
const filterTodos = () => { 
    switch(filter){
    case "all":
      return todos;
    case "active":
      return todos.filter((todo) => !todo.completed);
    case "completed":
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
}

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')]  md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] 
    bg-no-repeat bg-contain min-h-screen bg-gray-300 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] transition-all duration-1000">
      
<Header/>

      <main className="container mx-auto px-4 md:max-w-xl"> 
      {/* //md:max-w-xl jace que se posicione el todoList en el medio a 500px */}

       <TodoCreate createTodo={createTodo} />

        <Todolist todos={filterTodos()} updateTodo={updateTodo} removeTodo={removeTodo} />

      <TodoComputer conterItem={conterItem} clearComplete={clearComplete}/>

       <Filter changeFilter={changeFilter} filter={filter}/>
      </main>
      
      <footer className="text-center mt-8 dark:text-gray-400 transition-all duration-1000">Drag and drop to reorden list</footer>
    </div>
  )
};

export default App

 //npm install -D tailwindcss postcss autoprefixer
 //npx tailwindcss init -p


// npm install -D prettier prettier-plugin-tailwindcss // esto es para centrar automatiamente cuando se guarda