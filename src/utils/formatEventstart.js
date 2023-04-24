import { format } from 'date-fns';
// console.log(format);
import { ru } from 'date-fns/locale';
export const formatEventStart = start => {
  return format(Date.parse(start), 'dd MMM yyyy, HH:mm', {
    locale: ru,
  });
};
