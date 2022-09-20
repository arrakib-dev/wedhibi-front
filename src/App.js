/*
 * Application Home
 * Contains main Routing
 */

// imports
// ---------------------------------------------------

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./components/Home/Home"
import DashboardLayout from "./components/Dashboard/DashboardLayout"
import Company from "./components/Dashboard/Company/Company"
import Member from './components/Dashboard/Member/Member'
import Error404 from "./components/Errors/404"

// Componnet codes
// ---------------------------------------------------
export default function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route element={<DashboardLayout/>}>
            <Route path="/company" element={<Company/>} />
            <Route path="/company" element={<Company/>} />
        </Route>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </Router>

  )
}
