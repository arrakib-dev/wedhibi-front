import {Fragment} from "react";

export default function App() {

    return (
      <Fragment>
          <div className="addElementButtons flex flex-row items-center text-center w-[100%]">
              <div className="addProjectButton w-[33%] bg-white py-8 rounded-l-[15px]">
                  <p>Create a New Project</p>
                <button className="bg-primary px-5 py-1 text-white rounded-lg mt-3">create</button>
              </div>

              <div className="addTaskButton w-[33%] bg-white py-8 border-l border-r border-gray-100">
                  <p>Create a New Task</p>
                  <button className="bg-primary px-5 py-1 text-white rounded-lg mt-3">create</button>
              </div>

              <div className="addUserButton w-[33%] bg-white py-8 rounded-r-[15px]">
                  <p>Create a New User</p>
                  <button className="bg-primary px-5 py-1 text-white rounded-lg mt-3">create</button>
              </div>

          </div>
      </Fragment>
    )

  }