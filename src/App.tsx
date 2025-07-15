import "./index.css"
import { Routes,Route } from "react-router-dom"
import { Home } from "./Root/pages"
import SignupForm from "./Auth/forms/SignupForm"
import SigninForm from "./Auth/forms/SigninForm"
import AuthLayout from "../src/Auth//AuthLayout"
import RootLayout from "./Root/RootLayout"
function App() {


  return (
   
      <main className="text-white">  
    
        <Routes>
          {/* Public Routes */}
          <Route element={<AuthLayout/>}>
          <Route path="/sign-in" element={<SigninForm/>}/>
          <Route path="/sign-up" element={<SignupForm/>}/>
          </Route>
          {/* Private Routes */}

          <Route element={<RootLayout/>}>
          <Route index path= "/home" element={<Home/>}/>
          </Route>
        </Routes>
      </main>
        
  
  )
}

export default App
