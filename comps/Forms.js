import {useState} from 'react';
import ContinueBtn from "./ContinueBtn";

const Forms = () => {
    // useState to track data in input forms
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pass, setPass] = useState("");
    
    const style = "block w-full rounded border border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50";
    return (
        <div className="max-w-screen-md mx-auto">
            <form className="space-y-5">
                <label className="block">
                    <span className="text-gray-700">Name</span>
                    <input type="text" className={style} onChange={(e) => {setName(e.target.value)}} placeholder="Full Name"/>
                </label>
                <label className="block">
                    <span className="text-gray-700">Email</span>
                    <input type="text" className={style} onChange={(e) => {setEmail(e.target.value)}} placeholder="Email"/>
                </label>
                <label className="block">
                    <span className="text-gray-700">Phone</span>
                    <input type="text" className={style} onChange={(e) => {setPhone(e.target.value)}} placeholder="Phone Number"/>
                </label>
                <label className="block">
                    <span className="text-gray-700">Enter a 8 character password to make an account (optional)</span>
                    <input type="password" className={style} onChange={(e) => {setPass(e.target.value)}} placeholder="8 characters"/>
                </label>
            </form>
            <ContinueBtn data={{name, email, phone, pass}}>Continue</ContinueBtn>
        </div>
    );
}
 
export default Forms;