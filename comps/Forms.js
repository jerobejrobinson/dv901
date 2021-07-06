import ContinueBtn from "./ContinueBtn";
const Forms = () => {
    return (
        <div className="w-11/12 mx-auto">
            <form className="space-y-5">
                <label className="block">
                    <span className="text-gray-700">Name</span>
                    <input type="text" className="block w-full rounded border border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </label>
                <label className="block">
                    <span className="text-gray-700">Email</span>
                    <input type="text" className="block w-full rounded border border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </label>
                <label className="block">
                    <span className="text-gray-700">Phone</span>
                    <input type="text" className="block w-full rounded border border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </label>
                <label className="block">
                    <span className="text-gray-700">Password</span>
                    <input type="text" className="block w-full rounded border border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </label>
            </form>
            <ContinueBtn>Continue</ContinueBtn>
        </div>
    );
}
 
export default Forms;