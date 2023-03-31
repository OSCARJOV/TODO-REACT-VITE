import { useState } from "react"

const TodoCreate = ({createTodo}) => {

    const [title, setTitle] = useState("");

    const handlesubmkit = (e) => {
        e.preventDefault();

        if(!title.trim()){
            return setTitle("")
        }
        createTodo(title);
        setTitle("")
    }

    return(
        <form 
        onSubmit={handlesubmkit}
        className="flex gap-4 bg-white rounded-md overflow-hidden
        py-4 px-4 items-center mt-8 dark:bg-gray-800 transition-all duration-1000">

         <span className="rounded-full border-2 inline-block h-5 w-5
         border-2 " ></span>

         <input 
           type="text"
           placeholder="Create a new todo ..."
           className="w-full text-gray-400 outline-none dark:bg-gray-800 transition-all duration-1000" 
           value={title}
           onChange={(e) => setTitle(e.target.value)}  //setTitle reinicia el formulario
           />
       </form>
    )
}

export default TodoCreate