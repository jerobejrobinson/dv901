import { useContext } from "react";
import { Update } from '../pages/booking';

const ContinueBtn = ({children, data, service}) => {
    let update = useContext(Update);
    const handleSubmit = async () => {
        const {name, email, phone, date, time, service, desc, hours} = update.getData;
        const body = {name, email, phone, date, time, service, desc, hours};
        try {
            await fetch('/net/createCustomer', {
                method: 'POST',
                body: JSON.stringify(body)
            })
            console.log("data send")
        }catch(err) {
            console.log(err)
        }
    }
    return (
        <button 
            className="text-center bg-red-200 w-full py-2 rounded mt-5"
            onClick={() => {
                update.page();
                (service)?update.serviceSelected(service):null;
                update.data(data);
                if(update.getPage === 6) {
                    handleSubmit();
                }
            }}>
        {children}
        </button>
    );
}

export default ContinueBtn;