import React from "react";
import moment from "moment";
const Calender = () => {
    const value = moment();
    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("week");
    
    return (
        <div className="">
            {startDay.format("MM/DD")} - 
            {endDay.format("MM/DD")}
        </div>
    );
}
 
export default Calender;