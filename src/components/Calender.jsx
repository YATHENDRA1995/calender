import moment from "moment";

const Calendar = ({ date }) => {

  const monthStart = moment(date).startOf("month");
  const monthEnd = moment(date).endOf("month");
  const startDate = moment(monthStart).startOf("week");
  const endDate = moment(monthEnd).endOf("week");

  const weekdays = moment.weekdaysShort();

  const calendarRows = [];

  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      days.push(day);
      day = moment(day).add(1, "day");
    }
    calendarRows.push(days);
    days = [];
  }

  const isToday = (date) => moment().isSame(moment(date), "day");
  const isSelected = (day) => { 
    return moment(day).isSame(date, "day") 
  };

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="7">{moment(date).format("MMMM YYYY")}</th>
        </tr>
        <tr>
          {weekdays.map((weekday) => (
            <th key={weekday}>{weekday}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {calendarRows.map((week, i) => (
          <tr key={i}>
            {week.map((day) => (
              <td
                key={day.format("D")}
                className={`day ${
                  isSelected(day) ? "selected" : ""}${
                  isToday(day) ? "today" : ""
                }`}
              >
                {day.format("D")}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Calendar;
