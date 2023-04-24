
// import { format, formatDistanceStrict } from 'date-fns';
import { PageTitle } from 'components/PageTitle/PageTitle'
import { EventBord } from 'components/EventBord/EventBord'
import upcomingEvents from 'components/json/upcoming-events.json'
export const App = () => {
  return <>
    <PageTitle text="24th Core Worlds Coalition Conference" />
    <EventBord events={upcomingEvents}/>
  </>
}

// - FaMapMarkerAlt
// - FaUserAlt
// - FaCalendarAlt
// - FaClock