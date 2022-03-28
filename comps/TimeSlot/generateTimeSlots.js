export const generateTimeSlots = (start, end, length) => {
    let timeSlots = [];
    timeSlots.push(getValues(start));

    while(compare(getValues(start),getValues(end))) {
        start = timeArrToString(addValues(getValues(start),getValues(length)));

        timeSlots.push(getValues(start));
    }

    return timeSlots;
}

export const getValues = (time, str = ":") => {
    return time.split(str)
}

export const amPm = ([hour, mins]) => {
    if(Number(hour) < 12) {
        return `${hour}:${( (Number(mins) < 10) && (Number(mins) != 0) ) ? `0${mins}` : mins } am`;
    } else if(Number(hour) == 12){
        return `${hour}:${( (Number(mins) < 10) && (Number(mins) != 0) ) ? `0${mins}` : mins } pm`;
    } else {
        return `${"0" + (hour - 12)}:${( (Number(mins) < 10) && (Number(mins) != 0) ) ? `0${mins}` : mins } pm`;
    }
}
export const addValues = ([timeHours, timeMins], [incrementHours, incrementMins]) => {

    let newMins = Number(timeMins) + Number(incrementMins);
    let newHour = Number(timeHours) + Number(incrementHours);
    let newTime = (((newHour * 60) + newMins ) / 60).toString();
    let [hour, min] = getValues(newTime, ".");
    
    if(hour < 10) {
        hour = "0" + hour;
    } else {
        hour = hour.toString()
    }
    if(min === undefined) {
        min = "00";
    } else {
        min = Number("." + min) * 60;
        
        min = Math.round(min).toString()
    }
    return [hour, min];
}

const compare = ([sH,sM], [eH,eM]) => {

    const sMins = (Number(sH) * 60) + Number(sM);
    const eMins = (Number(eH) * 60) + Number(eM);
    return (sMins < eMins)?true:false;
}

export const compareThree = ([sH,sM], [mH, mM], [eH,eM]) => {

    const sMins = (Number(sH) * 60) + Number(sM);
    const mMins = (Number(mH) * 60) + Number(mM);
    const eMins = (Number(eH) * 60) + Number(eM);
    
    if((sMins <= mMins) && (mMins < eMins)) {
        return false;
    } else {
        return true;
    }
}

const convertMinutes = (minutes) => {
    let newTime = (minutes / 60).toString();
    let [hour, min] = getValues(newTime, ".");
    
    if(hour < 10) {
        hour = "0" + hour;
    } else {
        hour = hour.toString()
    }
    if(min === undefined) {
        min = "00";
    } else {
        min = Number("." + min) * 60;
        
        min = Math.round(min).toString()
    }
    return [hour, min];
}
const timeArrToString = ([hours, mins]) => `${hours}:${mins}`;

let frames = generateTimeSlots("08:30","17:00","00:15")
    .filter(time => {
        return compareThree(
            getValues("09:30"),
            time,
            addValues(
                getValues("09:30"), 
                getValues("04:00")
            )
        )
    })

frames = frames.filter(time => {
    return compareThree(
        getValues("15:00"),
        time,
        addValues(
            getValues("15:00"),
            getValues("04:00")
        )
    )
})

frames = frames.filter(time => {
    return compareThree(
        getValues("08:30"),
        time,
        addValues(
            getValues("08:30"),
            getValues("04:00")
        )
    )
})
