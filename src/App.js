/*
 * Application Home
 * Contains Routing
 */

// imports
// ---------------------------------------------------
import React, {lazy, useContext} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

import AuthContext from "./components/Auth/context/AuthContext"

import Home from "./components/Home/Home"
import DashboardLayout from './components/Dashboard/DashboardLayout'
import Dashboard from './components/Dashboard/Dashboard/Dashboard'
import Projects from './components/Projects/Projects'
import Project from './components/Projects/Project/Project'
import Tasks from './components/Tasks/Tasks'
import Task from './components/Tasks/Task/Task'
import Login from './components/Auth/UI/Login'
import Signup from './components/Auth/UI/Signup'
import Error from './components/Errors/Error'

/*
const Home = lazy(() => import('./components/Home/Home'))
const DashboardLayout = lazy(() => import('./components/Dashboard/DashboardLayout'))
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard/Dashboard'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Project = lazy(() => import('./components/Projects/Project/Project'))
const Tasks = lazy(() => import('./components/Tasks/Tasks'))
const Task = lazy(() => import('./components/Tasks/Task/Task'))
const Login = lazy(() => import('./components/Auth/UI/Login'))
const Signup = lazy(() => import('./components/Auth/UI/Signup'))
const Error = lazy(() => import('./components/Errors/Error'))
*/
// Component codes
// ---------------------------------------------------
export default function App() {

    const authCtx = useContext(AuthContext)

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route element={<DashboardLayout/>}>
            <Route path="/dashboard" element={(authCtx.isLoggedIn) ? <Dashboard/> : <Navigate replace to='/login' />} />
            <Route path="/projects">
                <Route path=":projectId" element={(authCtx.isLoggedIn) ? <Project/> : <Navigate replace to='/login' />}/>
                <Route index element={(authCtx.isLoggedIn) ? <Projects/> : <Navigate replace to='/login' />}/>
            </Route>
            <Route path="/tasks">
                <Route path=":taskId" element={(authCtx.isLoggedIn) ? <Task/> : <Navigate replace to='/login' />}/>
                <Route index element={(authCtx.isLoggedIn) ? <Tasks/> : <Navigate replace to='/login' />}/>
            </Route>
        </Route>
        <Route path="/login" element={(!authCtx.isLoggedIn) ? <Login/> : <Navigate replace to='/dashboard' />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>

  )
}
