import { format, parseISO } from 'date-fns';

export const formatDate = (date: string | Date, formatStr: string = 'MM/dd'): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatStr);
};