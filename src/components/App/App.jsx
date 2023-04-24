import event from '../json/user.json'
import statistics from '../json/statistics.json'
import friends from '../json/friends.json'
import transactions from '../json/transactions.json'
import { Profile } from 'components/Profile/Profile'
import { Statistics } from 'components/Statistics/Statistics.jsx'
import { FriendList } from 'components/FriendList/FriendList.jsx'
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory.jsx'
import { Container } from './App.styled'

export const App = () => {
  
  return (
    <Container>
      <Profile users={event} />
      <Statistics statistics={statistics} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
 
}


