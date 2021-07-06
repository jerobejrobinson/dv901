const {GET_APPOINTMENTS} = require("./utils/linkQueries");
const sendQuery = require('./utils/sendQuery');
const formattedRes = require('./utils/formattedResponse');

exports.handler = async (event) => {
    try {
        const res = await sendQuery(GET_APPOINTMENTS);
        const data = res.allAppointments.data;
        return formattedRes(200, data)
    } catch(err) {
        console.error(err)
        return formattedRes(500, {err: 'Something went wrong'})
    }
}