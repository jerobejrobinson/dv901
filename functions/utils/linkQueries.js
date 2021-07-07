const GET_APPOINTMENTS = `
    query {
        allAppointments {
            data {
                time
                date
            }
        }
    }
`;

const CREATE_CUSTOMER = `
mutation($name: String!, $email: String!, $phone: String!, $date: String!, $time: String!, $service: String!, $desc: String!, $hours: String!) {
    createCustomer(data: {
      name: $name,
      email: $email,
      phone: $phone,
      appointments: {
        create: [
          {
            date: $date,
            time: $time,
            service: $service,
            desc: $desc,
            hours: $hours
          }
        ]
      }
      }) {
        _id
        name
        email
        phone
        appointments {
          data {
            _id
            date
            time
            service
            hours
            desc
          }
        }
      }
  }
`;

const GET_BOOKED_TIMESLOTS = `
  query($date: String!) {
    getAppointmentDates(date: $date) {
      data {
        time
      }
    }
  }
`;

module.exports = {
    GET_APPOINTMENTS,
    CREATE_CUSTOMER,
    GET_BOOKED_TIMESLOTS
}