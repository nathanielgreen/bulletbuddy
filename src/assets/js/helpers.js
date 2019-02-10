import DayJs from 'dayjs';

export default {
  methods: {
    createMonthlyLogCalendarArray(createdAt) {
      const calendarArr = [];

      const currentYear = DayJs(createdAt).format('YYYY');
      const currentMonth = DayJs(createdAt).format('MM');
      const days = DayJs(createdAt).daysInMonth();

      for (let i = 0; i < days; i += 1) {
        const date = DayJs(`${currentYear}-${currentMonth}-${i + 1}`);
        const dayLetter = date.format('ddd').substring(0, 1);
        const dayObj = {
          weekday: dayLetter,
          dayOfMonth: i + 1,
          items: [],
        };
        calendarArr.push(dayObj);
      }
      return calendarArr;
    },
    createFutureMonthsArray(createdAt) {
      const months = [];

      for (let i = 0; i < 6; i += 1) {
        const date = createdAt;
        const incrementedMonth = DayJs(date).add(i, 'month').format('MMMM YYYY');
        const monthObj = {
          items: [],
          month: incrementedMonth,
        };
        months.push(monthObj);
      }

      return months;
    },
  },
};
