import SignupForm from "./Auth/forms/SignupForm"
import "./index.css"
import { Routes,Route } from "react-router-dom"
import { Home } from "./Root/pages"
import SigninForm from "./Auth/forms/SigninForm"
function App() {


  return (
   
      <main>  
        <Routes>
          <Route path="/sign-in" element={<SigninForm/>}/>
          <Route path="/sign-up" element={<SignupForm/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </main>
        
  
  )
}

export default App
