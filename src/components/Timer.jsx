import { useEffect, useState } from "react"


const Timer = () => {
  
    const [time , setTime] = useState(0);

    useEffect(()=>{
      const interval =  setInterval(()=>{
            
            setTime(prev => prev + 1)
            
        },1000);

        return ()=>{
            clearInterval(interval)
        }

    },[])


  return (
    <div className="text-red-800 text-7xl mt-20 p-6 bg-green-400 font-mono rounded-full">
      {time}
    </div>
  )
}

export default Timer
