import DayJs from 'dayjs';

export default {
  methods: {
    createCalendarArray() {
      const calendarArr = [];

      const currentYear = DayJs().format('YYYY');
      const currentMonth = DayJs().format('MM');
      const days = DayJs().daysInMonth();

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
  },
};
