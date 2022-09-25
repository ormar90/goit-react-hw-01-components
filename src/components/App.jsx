import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from "./Statistics/data.json";
import { FriendList } from './Friend-list/Friend-list';
import friends from "./Friend-list/friends.json";
import { TransactionHistory } from './Transaction-history/Transaction';
import transactions from './Transaction-history/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};