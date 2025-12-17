import { Link } from "react-router-dom";

const Navbar =()=>{
    return(
        <>
        <div    className='bg-amber-500 p-4  flex justify-between items-center'  >
          
<div  className='text-2xl font-bold'  >
     ZoGo Batch
  
</div>

<div  className='flex gap-20 p-2 font-serif font-light'  >
  <Link   to='/' className="bg-black text-white  p-2 rounded-2xl w-30 text-center"  >Home</Link>
    <Link   to="intraction" className="bg-black text-white p-2 rounded-2xl w-30 text-center " >Intraction</Link>
    <Link  to='function'  className="bg-black text-white p-2 rounded-2xl w-30 text-center " > Function page</Link>


</div>





        </div>
        </>
    )
}
export default Navbar;