import Sidebar from "../components/Sidebar";

function Billing() {
    return (
        <div className="h-screen flex flex-row bg-white">
        <div className="w-[235px] bg-[#F1F1F1]">
            <Sidebar />
        </div>
        <div className="flex-1 -ml-90 pt-10 overflow-auto">
            <div className="max-w-4xl mx-auto">
            <h1 className="text-[32px] font-semibold text-[#000022] mb-8">Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 relative">
                <img src="card.png" alt="Payment card" className="absolute top-6 right-6 w-12 h-8 object-contain"/>
                <h2 className="text-[#909090] font-semibold text-[16px] mb-4">Next payment</h2>
                <div className="flex flex-col mb-4">
                    <span className="text-[35px] font-bold text-gray-900">$50</span>
                    <span className="text-sm text-gray-500 mb-1">Dec 21, 2022</span>
                </div>
                <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-gray-600">Praesent lobortis velit mollis erat pellentesque.</p>
            </div>
    
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 relative">
                <img src="users.png" alt="Users" className="absolute top-6 right-6 w-8 h-8 object-contain"/>
                <h2 className="text-[#909090] font-semibold text-[16px] mb-4">User</h2>
                <div className="flex flex-row items-baseline">
                <p className="text-black font-bold text-[35px]">15/15</p>
                <p className="mb-6 font-bold text-black pl-2">used</p>
                </div>
                <p className="text-gray-600 mb-4">To add more users to the workspace you need to buy more seats</p>
                <button className="w-full bg-[#0832DE] hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">Buy</button>
            </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-gray-200">
            <h1 className="text-[32px] font-semibold text-[#000022] mb-8">Cloud storage</h1>
                <p className="text-gray-600 mb-2"></p>
                <div className="flex justify-between text-sm text-gray-600">
                <div className="flex flex-col items-center">
                    <span className="text-[32px] font-[#323C47] font-semibold">150 GB</span>
                    <h4 className=" font-bold -mt-2 pb-4">storage</h4>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-[32px] font-[#323C47] font-semibold pb-1">80 GB</span>
                    <h4 className=" font-bold -mt-2">used</h4>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-[32px] font-[#323C47] font-semibold pb-1">70 GB</span>
                    <h4 className=" font-bold -mt-2">free</h4>
                </div>
                </div>
                <div className="w-full bg-gray-200 rounded-[8px]  h-6 mb-2">
                <div className="bg-blue-600 h-6 rounded-[8px] " style={{ width: '65%' }}></div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Billing;