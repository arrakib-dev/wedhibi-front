/*
 * Application Home
 * Contains Routing
 */

// imports
// ---------------------------------------------------
import React, {lazy} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const Home = lazy(() => import('./components/Home/Home'))
const DashboardLayout = lazy(() => import('./components/Dashboard/DashboardLayout'))
const Company = lazy(() => import('./components/Dashboard/Company/Company'))
const Member = lazy(() => import('./components/Dashboard/Member/Member'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Project = lazy(() => import('./components/Projects/Project/Project'))
const Tasks = lazy(() => import('./components/Tasks/Tasks'))
const Task = lazy(() => import('./components/Tasks/Task/Task'))
const Login = lazy(() => import('./components/Auth/UI/Login'))
const Signup = lazy(() => import('./components/Auth/UI/Signup'))
const Error = lazy(() => import('./components/Errors/Error'))

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
