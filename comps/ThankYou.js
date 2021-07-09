import ContinueBtn from "./ContinueBtn";
const ThankYou = () => {
    return (
        <div>
            <div>
                <p>Thank you for booking with me</p>
                <ContinueBtn data={{sent: true}}>{"Click To Confirm And go back to homepage"}</ContinueBtn>
            </div>
        </div>
    );
}
 
export default ThankYou;