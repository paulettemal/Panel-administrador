function Diseño(){
    return(
        <>
            <div className="flex flex-col">
            <div className="flex flex-row w-full ml-4 ">
                <div className="flex flex-row relative w-[995px]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <img src="icon-search.png" alt="Search icon" className="w-5 h-5" />
                </div>
                    <input type="text" placeholder="Search" className="w-full pl-10 pr-3 py-2 mr-2 border rounded-[8px] border-[#C4C4C4] focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                </div>
                <div className="bg-[#4340DA] flex flex-row rounded-[8px] pt-[10px] pb-[10px] pl-[60px] pr-[60px]">
                    <button className=" font-semibold text-white pr-2 ">Invitve</button>
                    <img src="icon-user.png" className="h-[16px] w-[16px] "></img>
                </div>
            </div>
            <div className="flex space-x-4 pl-4 pt-2">
                <div className="relative">
                    <select className="appearance-none bg-white pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>All</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    </div>
                </div>
                <div className="relative">
                    <select className="appearance-none bg-white pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>All Departments</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                    <option>Development</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    </div>
                </div>
                </div>
            </div>
        
        </>
    )
}
export default Diseño


