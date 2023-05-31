import moment from 'moment'

export default function FormatDateTime(dateTime) {
    const now = moment();
    const pastDateTime = moment(dateTime);
    const diffInMinutes = now.diff(pastDateTime, 'minutes');
    const diffInHours = now.diff(pastDateTime, 'hours');
    const diffInDays = now.diff(pastDateTime, 'days');

    if (diffInMinutes < 60) {
      return diffInMinutes + ' минут назад';
    } else if ((diffInHours >= 1)&&(diffInHours < 24)) {
      return diffInHours + ' часов назад';
    } else {
      return diffInDays + ' дней назад';
    }
  }