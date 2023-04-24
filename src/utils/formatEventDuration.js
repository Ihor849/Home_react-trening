import { formatDistanceStrict } from 'date-fns';
export const formatEventduration = (start, end) => {
  return formatDistanceStrict(Date.parse(start), Date.parse(end));
};
