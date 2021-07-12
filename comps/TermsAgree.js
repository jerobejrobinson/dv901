import ContinueBtn from "./ContinueBtn";
const TermsAgree = () => {
    return (
        <div>
            <div className="max-w-screen-md mx-auto">
                <div className="p-4">
                    <p className="font-bold p-2">Covid-19</p>
                    <ul className="list-disc list-inside p-2">
                        <li>If you are feeling sick or have symptoms please stay at home till you are feeling well.</li>
                        <li>A mask is required during your service.</li>
                        <li>Free masks are available upon request.</li>
                    </ul>
                </div>
                <div className="p-4">
                    <p className="font-bold p-2">Deposits</p>
                    <ul className="list-disc list-inside p-2">
                        <li>A $15 non-refundable deposit is required for all services.</li>
                    </ul>
                </div>
                <div className="p-4">
                    <p className="font-bold p-2">Policy</p>
                    <ul className="list-disc list-inside p-2">
                        <li>No phones while service is in session.</li>
                        <li>Please come to your appointment make up free and contact lens free.</li>
                        <li>No extra guest allowed.</li>
                    </ul>
                </div>
                <ContinueBtn data={{agree: true}}>{"Agree & Continue"}</ContinueBtn>
            </div>
        </div>
    );
}
 
export default TermsAgree;