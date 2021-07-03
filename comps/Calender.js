import React, {useState, useEffect} from "react";
import moment from "moment";

const Calender = () => {
    const [calender, setCalender] = useState([]);
    const [value, setValue] = useState(moment());
    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("week");
   
    
    useEffect(() => {
        const day = startDay.clone().subtract(1, day);
        const a = [];
        while(day.isBefore(endDay, "day")){
            a.push(
                Array(7).fill(0).map(() => day.add(1, "day").clone())
            )
        }
        setCalender(a)
    }, [value])

    const isSelected = (day) => {
        return value.isSame(day, "day")
    }

    const beforeToday = (day) => {
        return day.isBefore(new Date(), "day")
    }

    const isToday = (day) => {
        return day.isSame(new Date(), "day")
    }

    const dayStyles = (day) => {
        if(beforeToday(day)) return "text-gray-300 pointer-events-none";
        if(isSelected(day)) return "bg-red-300 font-medium";
        if(isToday(day)) return "bg-gray-300";
        return ""
    }

    const currentMonth = () => value.format("MMMM");
    const currentYear = () => value.format("YYYY");
    return (
        <div className="w-80 mx-auto">
            <div id="header">
                <div className="">
                    {currentMonth()} {currentYear()}
                </div>
            </div>
            <div id="body">
                {calender.map(week => (
                    <div className="flex w-72 justify-stretch mx-auto">
                        {week.map((day) => (
                            <div 
                                className={`p-3 hover:bg-red-300 w-full text-center cursor-pointer ${dayStyles(day)}`}
                                onClick={() => setValue(day)}
                            >    
                                {day.format("DD").toString()}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Calender;