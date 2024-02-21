import { useState } from "react";
import "./App.css";

function App() {
  const[newValue,setnewValue]=useState(0);
  const decHandler=()=>{
    setnewValue(newValue-1);
  }

  const incHandler=()=>{
    setnewValue(newValue+1);
  }

  const resetHandler=()=>{
    setnewValue(0);
  }

  return (
   <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10" >
      <div className="text-blue-500 font-large text-2xl">
        Increment & Decrement
        </div>
      <div className="bg-white flex justify-center items-center gap-12 p-2 rounded-lg text-[25px]">
        <button className="font-bold text-5xl text-center border-r-4 border-slate-300 px-3" onClick={decHandler}>
          -
        </button>
        <div className="font-bold text-5xl">
         {newValue}
        </div>
        <button className="font-bold text-5xl text-center border-l-4 border-slate-300 px-3"  onClick={incHandler}>
          +
        </button>
      </div>
      <button className="bg-sky-500 text-white text-[25px] gap-12 p-3 rounded-lg" onClick={resetHandler}>
        Reset
      </button>

   </div>
  );
}

export default App;
