const TodoComputer = ({conterItem, clearComplete}) => {
    return(
        <section className="flex justify-between py-4 px-4 bg-white rounded-b-md dark:bg-gray-800 transition-all duration-1000">
        <span className="text-gray-400">{conterItem} item left</span>
        <button className="text-gray-400" onClick={clearComplete}>Clear Completed</button> 
        {/* // como clearComplete no tiene propiedades se pasa directamente */}
      </section>

    )
}

export default TodoComputer