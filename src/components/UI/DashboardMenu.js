import {FiGrid, FiPackage, FiList, FiUser} from "react-icons/fi";
import {Fragment} from "react";
import {NavLink} from "react-router-dom";

export default function DashboardMenu() {
    return (
        <Fragment>
            <div className="bg-bg-color flex flex-row items-center h-[80px] pl-10">
                <h1 className="text-text-color font-extrabold text-3xl">wedhibi</h1>
            </div>
            <div id="DashboardMenu">
                <ul className="mt-5">
                    <li className=""><NavLink to="dashboard" className={({isActive})=>{
                        return !isActive ? " flex flex-row items-center pl-10 mb-2 pt-2 pb-2 hover:bg-white hover:cursor-pointer hover:rounded-r-full hover:text-primary" : "flex flex-row items-center pl-10 mb-2 pt-2 pb-2 bg-white cursor-pointer rounded-r-full text-primary hover:bg-white hover:cursor-pointer hover:rounded-r-full hover:text-primary"
                    }}>
                        <FiGrid className="mr-3 text-xl"/> Overview</NavLink>
                    </li>
                    <li className=""><NavLink to="projects" className={({isActive})=>{
                        return !isActive ? "flex flex-row items-center pl-10 mb-2 pt-2 pb-2 hover:bg-white hover:cursor-pointer hover:rounded-r-full hover:text-primary" : "flex flex-row items-center pl-10 mb-2 pt-2 pb-2 bg-white cursor-pointer rounded-r-full text-primary hover:bg-white hover:cursor-pointer hover:rounded-r-full hover:text-primary"
                    }}>
                        <FiPackage className="mr-3 text-xl"/> Projects</NavLink>
                    </li>
                    <li className=""><NavLink to="tasks" className={({isActive})=>{
                        return !isActive ? "flex flex-row items-center pl-10 mb-2 pt-2 pb-2 hover:bg-white hover:cursor-pointer hover:rounded-r-full hover:text-primary" : "flex flex-row items-center pl-10 mb-2 pt-2 pb-2 bg-white cursor-pointer rounded-r-full text-primary hover:bg-white hover:cursor-pointer hover:rounded-r-full hover:text-primary"
                    }}>
                        <FiList className="mr-3 text-xl"/> Tasks</NavLink>
                    </li>
                    <li className=""><NavLink to="users" className={({isActive})=>{
                        return !isActive ? "flex flex-row items-center pl-10 mb-2 pt-2 pb-2 hover:bg-white hover:cursor-pointer hover:rounded-r-full hover:text-primary" : "flex flex-row items-center pl-10 mb-2 pt-2 pb-2 bg-white cursor-pointer rounded-r-full text-primary hover:bg-white hover:cursor-pointer hover:rounded-r-full hover:text-primary"
                    }}>
                        <FiUser className="mr-3 text-xl"/> Users</NavLink>
                    </li>
                </ul>

            </div>
        </Fragment>


    )
}