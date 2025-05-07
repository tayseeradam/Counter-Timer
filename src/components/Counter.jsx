import { useEffect, useState } from "react"


const Counter = () => {

    const [counter , setCounter] = useState( localStorage.getItem("counter")? 
    JSON.parse(localStorage.getItem("counter")) : 0);


    const handleIncrease= ()=>{
      setCounter(counter + 1);
    }
    const handleDecreas= ()=>{
      setCounter(counter - 1);
    }

    useEffect(()=>{
      
      localStorage.setItem("counter", counter);
      
    },[counter]);

  return (
    <div className="flex items-center h-screen justify-center">
        <div className="flex gap-4 justify-center items-center">
            <button className="bg-green-700 p-3 text-white text-6xl rounded-lg w-20"
            onClick={handleIncrease}
            >+</button>
            <p className={`p-3 w-[60px] h-[60px] text-center text-2xl font-semibold text-gray-800 
              ${counter > -1 ? " bg-green-300" : "bg-red-300"}  rounded-full`}>{counter}</p>

            <button 
            className="bg-red-700 text-white text-6xl  p-3 rounded-lg w-20"
            onClick={handleDecreas}
            >-</button>
        </div>
      
    </div>
  )
}

export default Counter
