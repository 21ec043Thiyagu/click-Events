const Intraction =()=>{
   let count=0;
    const handleclick =()=>{
        count++
        alert(count)   
    }
   const sumbitvalue =(thiyagu)=>{
    thiyagu.preventDefault()
    count = count+1
    alert(count)
   }
   const changevalue =(good)=>{
     alert(good.target.value)
   }

    
    return(
        <>
        
  <section>
    
<div  className="bg-blue-700 h-75  flex flex-col justify-center items-center text-3xl font-bold gap-5"  >

       <div>
       Onclick Event 
      </div>
<div  className="bg-white text-2xl text-black rounded-2xl w-30 text-center p-2" onClick={handleclick} >
<button>Click</button>
</div>

</div>
</section>      




<section>
<div  className="bg-green-600 h-75  flex flex-col justify-center   font-bold items-center gap-5"  >
            
       <div   className="text-3xl">
           Onsubmit Event
       </div>

   <form  className="flex gap-3 "  onSubmit={sumbitvalue}>
<input type="text"  placeholder='Enter the name'   className="bg-amber-50 p-2 w-50 " />
<input type="submit" value='Register' className="bg-amber-50 p-2 w-50 " />
  </form> 

</div>
</section>





<section>
<div  className="bg-violet-700 h-75  flex flex-col justify-center   font-bold items-center gap-5"  >
            
       <div   className="text-3xl">
           Onchange Event 
       </div>

   <form  className="flex gap-3 " >
<input type="text"  placeholder='Enter the name'  onChange={changevalue} className="bg-amber-50 p-2 w-50 " />
<input type="submit" value='Register' className="bg-amber-50 p-2 w-50 " />
  </form> 

</div>
</section>


        </>
    )
}
export default Intraction;