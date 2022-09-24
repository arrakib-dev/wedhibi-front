/*
 * Application Home
 * Contains Routing
 */

// imports
// ---------------------------------------------------

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from './components/Home/Home'
import DashboardLayout from './components/Dashboard/DashboardLayout'
import Company from './components/Dashboard/Company/Company'
import Member from './components/Dashboard/Member/Member'
import Projects from './components/Projects/Projects'
import Project from './components/Projects/Project/Project'
import Tasks from './components/Tasks/Tasks'
import Task from './components/Tasks/Task/Task'
import Login from './components/Auth/UI/Login'
import Signup from './components/Auth/UI/SIgnup'
import Error from './components/Errors/Error'

// Component codes
// ---------------------------------------------------
export default function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route element={<DashboardLayout/>}>
            <Route path="/company" element={<Company/>} />
            <Route path="/member" element={<Member/>} />
            <Route path="/projects">
                <Route path=":projectId" element={<Project/>}/>
                <Route index element={<Projects/>}/>
            </Route>
            <Route path="/tasks">
                <Route path=":taskId" element={<Task/>}/>
                <Route index element={<Tasks/>}/>
            </Route>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>

  )
}
