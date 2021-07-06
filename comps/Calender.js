import React, {useState, useEffect} from "react";
import moment from "moment";
import ContinueBtn from "./ContinueBtn";

const Calender = () => {
    const [calender, setCalender] = useState([]);
    const [value, setValue] = useState(moment());
    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("week");
    const fakeData = ["07-16-2021", "07-19-2021", "07-23-2021", "07-17-2021"];

    createCalender(startDay, endDay, value, setCalender);

    return (
        <div className="w-full md:max-w-screen-md mx-auto border border-gray-300 mt-10">
            <Header func={setValue} value={value}/>
            <div id="calender-body">
                <div className="flex w-full justify-between mx-auto border-b-2 divide-gray-300">
                    {
                        ["Su","Mo","Tu","We","Th","Fr","Sa"].map((d, index) => (
                            <div className="text-center w-full pointer-events-none p-3" key={index}>{d}</div>
                        ))
                    }
                </div>
                {calender.map((week, index) => (
                    <div className="flex w-full justify-stretch mx-auto" key={index}>
                        {week.map((day, index) => (
                            <div 
                                className={`p-3 hover:bg-red-300 w-full text-center cursor-pointer ${applyDayStyles(day, value, fakeData)}`}
                                onClick={() => setValue(day)}
                                key={index}
                            >    
                                {day.format("DD").toString()}
                            </div>
                        ))}
                        
                    </div>
                ))}
                <ContinueBtn data={{day: value.format("MM-DD-YYYY").toString()}} >Continue</ContinueBtn>
            </div>
        </div>
    );
}
 
export default Calender;

const applyDayStyles = (day, value, fakeData) => {
    
    const isSelected = (day) => {
        return value.isSame(new Date(day.format("MM-DD-YYYY")), "day")
    }

    const beforeToday = (day) => {
        return day.isBefore(new Date(), "day")
    }

    const isToday = (day) => {
        return day.isSame(new Date(), "day")
    }

    
    const dayStyles = (day, value) => {

        for(let i = 0; i <= fakeData.length; i++){
            if(day.format("MM-DD-YYYY") === fakeData[i]){
                return "text-gray-300 pointer-events-none bg-gray-200"
            }
        }
        if(beforeToday(day)) return "text-gray-300 pointer-events-none";
        if(isSelected(day, value)) return "bg-red-300 font-medium";
        if(isToday(day)) return "bg-gray-300 font-medium";
        return "pass"       
    }

    return dayStyles(day);
}
const createCalender = (startingDay, endingDay, value, func) => {
    useEffect(() => {
        const day = startingDay.clone().subtract(1, day);
        const calender = [];
        while(day.isBefore(endingDay, "day")){
            calender.push(Array(7).fill(0).map(() => day.add(1, "day").clone()))
        }
        func(calender)
    }, [value])
}
const Header = ({func, value}) => {
    const thisMonth = () => value.isSame(new Date, "month")
    const prevMonth = () => value.clone().subtract(1, "month");
    const nextMonth = () => value.clone().add(1, "month");
    const currentMonth = () => value.format("MMMM");
    const currentYear = () => value.format("YYYY");
    return (
        <div className="flex justify-between w-full mx-auto p-5 font-bold">
            <div className="pointer-events-none">
                {currentMonth()} {currentYear()}
            </div>
            <div className="space-x-4">
                {!thisMonth() ? <button  className="bg-red-300 p-2 rounded shadow" onClick={() => !thisMonth() && func(prevMonth())}>Prev</button> : null}
                <button className="bg-red-300 p-2 rounded shadow" onClick={() => func(nextMonth())}>Next</button>
            </div>
        </div>
    );
}