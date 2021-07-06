const {CREATE_CUSTOMER} = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formattedRes = require("./utils/formattedResponse");

exports.handler = async (event) => {
    const {name, email, phone, date, time, service, desc, hours} = JSON.parse(event.body);
    const data = {name, email, phone, date, time, service, desc, hours}
    try {
        const {createCustomer: createdCustomer} = await sendQuery(CREATE_CUSTOMER, data);

        return formattedRes(200, createdCustomer)
    } catch(err) {
        console.log(err)
        return formattedRes(500, {err: "Something went wrong"})
    }
}