import { useState, useContext, useEffect } from "react";
import { generateTimeSlots, compareThree, getValues, addValues } from "./generateTimeSlots";
import ContinueBtn from "../ContinueBtn";
import { Update } from "../../pages/booking";

const TimeSlot = () => {
    const [el, setEL] = useState(document.createElement('div'))
    const [time, setTime] = useState("");
    const [booked, setBooking] = useState([])
    const [slots, setSlots] = useState([])
    const update = useContext(Update)

    let [startTime, endTime, interval] = ["12:00","18:00","00:15"]

    const timeSlots = () => {
        return generateTimeSlots(startTime, endTime, interval)
    }

    const getBookedSlots = async () => {
        const {date} = update.getData;
        const body = {date};

        try {
            const res = await fetch('/net/getTimeSlots', {
                method: 'POST',
                body: JSON.stringify(body)
            })
            
            const booked = await res.json();
            setBooking(booked)

            let ts = timeSlots();
            booked.map(book => {
                ts = ts.filter(time => {
                    return compareThree(
                        getValues(book.time),
                        time,
                        addValues(
                            getValues(book.time),
                            getValues("04:00")
                        )
                    )
                })
            })
            setSlots(ts)

        }catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getBookedSlots()
    }, [])
    
    return (
        <div className="max-w-screen-md mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto text-center md:max-w-screen-md ">
                {
                    slots.map((ts, index) => (
                        <div 
                            key={index} 
                            className={`p-5 border border-gray-300 hover:bg-red-300 cursor-pointer`}
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