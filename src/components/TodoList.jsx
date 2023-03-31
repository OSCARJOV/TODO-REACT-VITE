import CrossIcon from "./CrossIcon"
import TodoItem from "./TodoItem"

const Todolist = ({todos, updateTodo, removeTodo}) => {
    return(
        <div className="bg-white rounded-t-md mt-8 overflow-hidden dark:bg-gray-800 transition-all duration-1000" >

        {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} removeTodo={removeTodo}/>
        ))}
         


        </div>
    )
}

export default Todolist