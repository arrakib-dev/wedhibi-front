import { FiBell, FiMail, FiUser } from "react-icons/fi";
export default function DashboardNavbar() {
    return (
      <header className="bg-bg-color flex flex-row items-center h-[80px] ml-10 mr-10">
          <div className="logo w-[220px]">
              <h1 className="text-text-color font-extrabold text-3xl">wedhibi</h1>
          </div>

          <div className="flex flex-row items-center w-[100%]">
              <div className="page-title w-[100%]">
                  <h1 className="text-text-color-light font-medium text-xl">Dashboard</h1>
              </div>

              <nav className="flex flex-row items-center justify-end w-[100%] text-right ">
                  <button className=" p-2 rounded-full  ml-0 text-xl"><FiBell/></button>
                  <button className=" p-2 rounded-full  ml-2 text-xl"><FiMail/></button>
                  <button className="bg-white p-2 rounded-full text-2xl ml-3"><FiUser/></button>
              </nav>
          </div>

      </header>

    )
}