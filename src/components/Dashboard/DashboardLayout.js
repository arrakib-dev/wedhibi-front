import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import DashboardNavbar from "../UI/DashboardNavbar";
import DashboardMenu from "../UI/DashboardMenu";

export default function App() {
    return (
        <Fragment>
            <div className="flex flex-row h-screen">
                <div className="w-[220px]">
                    <DashboardMenu/>
                </div>
                <div className="w-[calc(100vw-220px)] pr-10 ml-10">
                    <DashboardNavbar/>
                    <div className="mt-5">
                        <Outlet/>
                    </div>

                </div>

            </div>




        </Fragment>
     
    )
  }