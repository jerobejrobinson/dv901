import ContinueBtn from "./ContinueBtn";
const TermsAgree = () => {
    return (
        <div>
            <div>
                <p>Covid-19</p>
                <p>⁃ If you are feeling sick or have symptoms please stay at home till you are feeling well.</p>
                <p>⁃ A mask is required during your service.</p>
                <p>⁃ Free masks are available upon request.</p>
                <p>Deposits</p>
                <p>⁃ A $15 non-refundable deposit is required for all services.</p>
                <p>Policy</p>
                <p>⁃ No phones while service is in session.</p>
                <p>⁃ Please come to your appointment make up free and contact lens free.</p>
                <p>⁃ No extra guest allowed.</p>
                <ContinueBtn data={{agree: true}}>{"Agree & Continue"}</ContinueBtn>
            </div>
        </div>
    );
}
 
export default TermsAgree;