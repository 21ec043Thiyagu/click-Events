import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Intraction from "./components/Intraction";

const App =()=>{
  return(
    <>
    <div  >
    


    <header>
      <Navbar/>
    </header>


    <main>
      <Routes>

    <Route  path="/"   element={<Home/>}   />
    <Route   path="intraction"   element={<Intraction/>}  />
    


      </Routes>
    </main>
      </div>
      </>
  )
}
export default App;