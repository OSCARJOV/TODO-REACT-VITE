import { useEffect, useState } from "react";
import Moonicon from "./MoonIcon";
import SunIcon from "./SunIcon";

const variableState = localStorage.getItem('theme') === 'dark'; //operador ternario// me devuelve falso o verdadero 

const Header = () => {


    const [darkmode, setHarkmode] = useState(variableState)

    useEffect(() => {

        if(darkmode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")

        }


    }, [darkmode]) // use effect es como un policia ejecuta lo que este dentro si cambia lo que esta dentro de su []
  //  const HandleMode = () => {

   // }


    return (
        <header className="container mx-auto pt-8 px-4 md:max-w-xl">
            <div className="flex justify-between">
                <h1 className="font-semibold uppercase text-3xl text-white tracking-[0.3em]">Todo</h1>
                <button onClick={() => setHarkmode(!darkmode)}>
                    {
                        darkmode ? <SunIcon/> : <Moonicon/>
                    }

                </button>
            </div>


        </header>
    )
}

export default Header;
