import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import DashboardNavbar from "../UI/DashboardNavbar";

export default function App() {
    return (
        <Fragment>
            <DashboardNavbar/>

            <Outlet/>
        </Fragment>
     
    )
  }