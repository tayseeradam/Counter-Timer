
import Counter from "./components/Counter"
import Timer from "./components/Timer"


const App = () => {
  return (
    <div className="flex flex-col justify-around h-screen items-center">
            <Timer/>
      <Counter/>
      
    </div>
  )
}

export default App
