const Navbar = () => {
    return (
        <nav className="bg-gray-100">
            <div className="max-w-7xl border border-red-400 mx-auto">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <div className="">
                            <a href="/" className="flex items-center py-5 px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                </svg>
                                <span>JerobeRob</span>
                            </a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Features</a>
                            <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Pricing</a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1">
                        <a href="" className="py-5 px-3">Login</a>
                        <a href="" className="py-3 px-3 bg-green-400 text-green-800 rounded shadow">Signup</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;