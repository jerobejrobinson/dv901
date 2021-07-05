import { useContext, useState } from "react";
import { Update } from "../../pages/booking";
import { generateTimeSlots } from "./generateTimeSlots";
const TimeSlot = () => {
    const update = useContext(Update);
    let [s, e, i] = ["12:00","18:00","00:15"]
    
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto text-center md:max-w-screen-md ">
            {
                generateTimeSlots(s, e, i).map((time, index) => (
                    <div key={index} className="p-5 border border-gray-300 hover:bg-red-300"> 
                        {`${time[0]}:${time[1]}`}
                    </div>
                ))
            }
        </div>
    );
}
 
export default TimeSlot;