import { Fragment } from "react"
import { Outlet } from "react-router-dom"

export default function App() {
    return (
        <Fragment>
            <h1 className="text-3xl font-bold underline">
               DashboardLayout
            </h1>
            <Outlet/>
        </Fragment>
     
    )
  }