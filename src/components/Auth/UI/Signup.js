


export default function App() {
    return (
        <div className="w-screen h-screen bg-bg-color flex items-start justify-center">
            <div className="w-1/3 max-w-[600px] min-w-[300px] bg-white p-10 rounded-2xl mt-24">
                <div>
                    <h1 className="text-text-color-bolt font-medium text-lg mb-8">Create New Company</h1>
                </div>
                <form className="flex flex-col ">
                    <div className="flex flex-col mb-8">
                        <input className="border border-[#dee2e6] px-6 py-3 focus-visible:border-primary focus-visible:outline-none" type="text" name="name" id="name" placeholder="Name"/>
                    </div>

                    <div className="flex flex-col mb-8">
                        <input className="border border-[#dee2e6] px-6 py-3 focus-visible:border-primary focus-visible:outline-none" type="text" name="description" id="description" placeholder="Description"/>
                    </div>

                    <div className="flex flex-col mb-8">
                        <input className="border border-[#dee2e6] px-6 py-3 focus-visible:border-primary focus-visible:outline-none" type="email" name="email" id="email" placeholder="Email"/>
                    </div>

                    <div className="flex flex-col mb-8">
                        <input className="border border-[#dee2e6] px-6 py-3 focus-visible:border-primary focus-visible:outline-none" type="password" name="password" id="password" placeholder="Password"/>
                    </div>

                    <div className="flex flex-col">
                        <input className="bg-primary w-max text-white py-3 px-7 rounded cursor-pointer uppercase hover:bg-primary-dark text-sm" type="submit" value="submit"/>
                    </div>
                </form>
            </div>
        </div>

    )
}