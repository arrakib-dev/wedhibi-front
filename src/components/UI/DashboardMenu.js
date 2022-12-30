import {FiGrid, FiPackage, FiList, FiUser} from "react-icons/fi";
import {Fragment} from "react";

export default function DashboardMenu() {
    return (
        <Fragment>
            <div className="bg-bg-color flex flex-row items-center h-[80px] pl-10">
                <h1 className="text-text-color font-extrabold text-3xl">wedhibi</h1>
            </div>
            <div id="DashboardMenu">
                <ul>
                    <li className="pl-10"><a><FiGrid/> Overview</a></li>
                    <li className="pl-10"><a><FiPackage/> Projects</a></li>
                    <li className="pl-10"><a><FiList/> Tasks</a></li>

                    <li className="pl-10"><a><FiUser/> Users</a></li>
                </ul>

            </div>
        </Fragment>


    )
}