import {useState} from 'react';
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(prev => !prev)
    }

    return (
        <nav className="md:bg-gray-300 relative overflow_x_clip z-50">
            <div className="max-w-7xl mx-auto px-4 bg-gray-300">
                <div className="flex justify-between">

                    {/* Main Nav */}
                    <div className="flex space-x-4">

                        {/* Logo and Brand */}
                        <div className="">
                            <a href="/" className="flex items-center py-5 px-3 font-bold"> Dreamy Vibes 901</a>
                        </div>

                        {/* Primary Nav */}
                        <div className="flex items-center space-x-3 hidden md:flex">
                            <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Services</a>
                            <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Pricing</a>
                        </div>

                    </div>

                    {/* Login Signup */}
                    <div className="flex items-center space-x-1 hidden md:flex">
                        <a href="" className="py-5 px-3">Login</a>
                        <a href="" className="py-2 px-3 bg-green-400 hover:bg-green-300 text-green-800 rounded shadow transition duration-300">Signup</a>
                    </div>

                    {/* Hamburger Btn */}
                    <div className="md:hidden flex items-center">
                        <button onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
            {/* Mobile Menu */}
            <div className={showMenu?'showMenu h-96 space-y-10':'hideMenu'}>
                <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">Services</a>
                <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
                <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200 mb-4">Login</a>
                <a href="" className="block py-2 px-4 text-sm w-32 mx-auto bg-green-400 hover:bg-green-300 text-green-800 rounded shadow transition duration-300">Signup</a>
            </div>
        </nav>
    );
}
 
export default Navbar;