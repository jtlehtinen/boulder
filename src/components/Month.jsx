import './Month.css';

function MonthPicker() {
  return (
    <div className="month">
      <ul>
        <li className="prev">&#10094;</li>
        <li className="next">&#10095;</li>
        <li>
          May<br/>
          <span style={{fontSize: "18px"}}>2022</span>
        </li>
      </ul>
    </div>
  );
}

function Weekdays() {
  return (
    <ul className="weekdays">
      <li>Mon</li>
      <li>Tue</li>
      <li>Wed</li>
      <li>Thu</li>
      <li>Fri</li>
      <li>Sat</li>
      <li>Sun</li>
    </ul>
  );
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1);
}

function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0);
}

function Days({date}) {
  const first = getFirstDayOfMonth(date.getFullYear(), date.getMonth());
  const last = getLastDayOfMonth(date.getFullYear(), date.getMonth());

  const activeDay = date.getDate();
  const numberOfDays = last.getDate() - first.getDate() + 1;

  function getDay(date) {
    // first day is monday instead of sunday
    return (date.getDay() + 1) % 7;
  }

  console.log(numberOfDays + getDay(first));

  return (
    <ul className="days">
      {[...Array(numberOfDays + getDay(first))].map((_, index) => (
        <li
          key={index}
          className={activeDay === (index + 1) ? 'active' : null}
        >
          {index + 1}
        </li>
      ))}
    </ul>
  );
}

function Day() {
  const date = new Date();

  return (
    <>
      <MonthPicker/>
      <Weekdays/>
      <Days date={date}/>
    </>
  );
}

export default Day;
