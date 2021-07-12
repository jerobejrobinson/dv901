const {GET_BOOKED_TIMESLOTS} = require("./utils/linkQueries");
const sendQuery = require('./utils/sendQuery');
const formattedRes = require('./utils/formattedResponse');

exports.handler = async (event) => {
    const {date} = JSON.parse(event.body);
    const body = {date}
    // console.log(body)
    try {
        const res = await sendQuery(GET_BOOKED_TIMESLOTS, body);
        const data = res.getAppointmentDates.data;
        // console.log(data)
        return formattedRes(200, data)
    } catch(err) {
        console.error(err)
        return formattedRes(500, {err: 'Something went wrong'})
    }
}