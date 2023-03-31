import CheckIcon from "./CheckIcon"
import CrossIcon from "./CrossIcon"

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
    const { id, title, completed } = todo

    return (
        <article className="flex gap-4 py-4 border-b border-b-gray-400 px-4 ">
            {/* <button className="flex-none rounded-full border-2 inline-block h-5 w-5
      border-2 "> */}

            <button
                className={`${completed
                        ? "flex-none rounded-full border-2 inline-block h-5 w-5 border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
                        : "flex-none rounded-full border-2 inline-block h-5 w-5 border-2 "

                    }`}
                onClick={() => updateTodo(id)}
            >
                
                {
                    completed && <CheckIcon />
                }

            </button>
            <p className={`text-gray-600 grow dark:text-gray-400 transition-all duration-1000${completed && "line-through"}`}>
                {title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <CrossIcon />
            </button>
        </article>
    )
}

export default TodoItem