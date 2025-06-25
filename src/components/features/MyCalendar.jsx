import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // 기본 스타일
import "./MyCalendar.css"; // 우리가 꾸밀 CSS

const MyCalendar = ({ date, setDate }) => {
  return (
    <div className="calendar-wrapper">
      <Calendar
        onChange={setDate}
        value={date}
        locale="ko-KR"
        calendarType="gregory"
        formatMonthYear={(locale, date) =>
          `${date.getFullYear()}년 ${date.getMonth() + 1}월`
        }
        formatDay={(locale, date) => date.getDate()}
        nextLabel=">"
        prevLabel="<"
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
      />
    </div>
  );
};

export default MyCalendar;
