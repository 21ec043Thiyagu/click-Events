import { useState } from "react";


const Function =()=>{

const [count,setCount] =useState(0)
const handleclicked =()=>{
    setCount(count+1)
}
const [string,setString] =useState("Welcome page")
const handleclicked2=()=>{
    setString("Updated page")
}


const[boolean,setBoolean] =useState(false)
const clikedbutton =()=>{
    setBoolean(true)
}
const [option,setOption]=useState(false)
const oncepic=()=>{
    setOption(true)
}
const data =["apple","babana","papaya"]
const [pic,setPic]=useState(0)
const picked =()=>{
    setPic(data++)
}
const [con,setCon]=useState(0)
const clickedsum=()=>{
    setCon(12)
}




    return(
        <>

      <div  className="bg-blue-700 h-50 text-2xl flex flex-col justify-center items-center text-center  gap-5 "  >
        <div className="font-bold"   >
            <h1>Function Process</h1>
            {count}
        </div>
        <div  className="bg-amber-50 w-30 p-2  text-center rounded-full "  >
            <button onClick={handleclicked}  >Click Me</button>
        </div>
      </div>






      <div  className="bg-gray-400 h-50 text-2xl flex flex-col justify-center items-center text-center  gap-5 "  >
        <div className="font-bold"   >
            <h1>Function Process of string</h1><br />
            {string}
            
        </div>
        <div  className="bg-amber-50 w-30 p-2  text-center rounded-full "  >
            <button onClick={handleclicked2}  >Click Me</button>
        </div>
      </div>





<div  className="bg-pink-600 h-50 text-2xl flex flex-col justify-center items-center text-center  gap-5 "  >
        <div className="font-bold"   >
            <h1>Function Process of boolean(Ternary operator)</h1><br />
           {boolean?"value is true..because,using in ternary operator of boolean":"value is false"}
            
        </div>
        <div  className="bg-amber-50 w-30 p-2  text-center rounded-full "  >
            <button onClick={clikedbutton}  >Click Me</button>
        </div>
      </div>



      
<div  className="bg-green-600 h-50 text-2xl flex flex-col justify-center items-center text-center  gap-5 "  >
        <div className="font-bold"   >
            <h1>Function Process of boolean(optinal chaining method)</h1><br />
    
            
        </div>
        <div  className="bg-amber-50 w-30 p-2  text-center rounded-full "  >
            <button onClick={oncepic}  >Click Me</button>
        </div>
      </div>





<div   className="bg-red-600 h-50 text-2xl flex flex-col justify-center items-center text-center  gap-5 " >
    <div  className="font-bold" >
        <h1>Function Process(Array method)</h1>
        {pic}
    </div>
    <div className="bg-amber-50 w-30 p-2  text-center rounded-full "  >
        <button  onClick={picked}    >Click</button>
    </div>
</div>


<div   className="bg-violet-800 p-2 h-40  text-center flex flex-col justify-center items-center  gap-5 "  >
    <div   className="text-3xl font-bold " >
        <h1>function process in objext</h1>
        {con}
    </div>
    <div className="bg-amber-50 w-40 text-center hover:text-white p-2.5 font-serif text-2xl rounded-3xl hover:bg-red-600 text-black"   >
        <button onClick={clickedsum}   >Click me</button>
    </div>
</div>
<div  className="bg-yellow-800 h-50 text-center flex flex-col justify-center items-center gap-4 text-4xl"  >
    <div className="text-bold"   >
        <h1>Function values</h1>
    </div>
    <div>
        <button className="bg-amber-50 text-3xl p-2  w-40 text-center rounded-3xl"  >Touch it</button>
    </div>
</div> 
<div  className="bg-red-950 h-50 text-center flex flex-col justify-center items-center gap-5" >
    <div className="font-bold"  >
        <h1>the react is good </h1>
    </div>
    <div>
        <button className="bg-white w-40 text-black text-center text-2xl  rounded-3xl "  >click me</button>
    </div>
</div>

   

        </>
    )
}
export default Function;