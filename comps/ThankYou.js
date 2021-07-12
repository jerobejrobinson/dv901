import ContinueBtn from "./ContinueBtn";
const ThankYou = () => {
    return (
        <div>
            <div className="max-w-screen-md mx-auto">
                <div className="p-20 text-center bg-red-100 ">
                    <p className="font-bold text-2xl">Thank you for booking with me</p>
                    <p>Just click the button below to comfirm your appointment</p>
                </div>
                <ContinueBtn data={{sent: true}}>Click To Confirm</ContinueBtn>
            </div>
        </div>
    );
}
 
export default ThankYou;