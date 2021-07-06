import { useState } from "react";
import { generateTimeSlots } from "./generateTimeSlots";
import ContinueBtn from "../ContinueBtn";

const TimeSlot = () => {
    const [el, setEL] = useState(document.createElement('div'))
    const [time, setTime] = useState("");
    let [startTime, endTime, interval] = ["12:00","18:00","00:15"]

    const timeSlots = () => {
        return generateTimeSlots(startTime, endTime, interval)
    }
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto text-center md:max-w-screen-md ">
                {
                    timeSlots().map((ts, index) => (
                        <div 
                            key={index} 
                            className={`p-5 border border-gray-300 hover:bg-red-300`}
                            onClick={(e) => {
                                setTime(`${ts[0]}:${ts[1]}`); 
                                setEL((prev) => {
                                    prev.classList.remove("bg-red-300");
                                    e.target.classList.add("bg-red-300");
                                    return e.target
                                })
                                                  
                            }}> 
                            {`${ts[0]}:${ts[1]}`}
                        </div>
                    ))
                }
            </div>
            <ContinueBtn data={{time}}>Continue</ContinueBtn>
        </div>
    );
}
 
export default TimeSlot;