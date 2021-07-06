import { useContext } from "react";
import { Update } from '../pages/booking';

const ContinueBtn = ({children, data}) => {
    let update = useContext(Update);

    return (
        <button 
            className="text-center bg-red-200 w-full py-2 rounded mt-5"
            onClick={() => {
                update.page()
                update.data(data)
            }}>
        {children}
        </button>
    );
}
 
export default ContinueBtn;