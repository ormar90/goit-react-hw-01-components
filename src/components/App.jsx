import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from "./Statistics/data.json";
import { FriendSection } from './Friend-list/Friend-list';
import friends from "./Friend-list/friends.json";
import { TransactionHistory } from './Transaction-history/Transaction';
import transactions from './Transaction-history/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics data={data} title="Upload stats"></Statistics>
      <FriendSection friends={friends}></FriendSection>
      <TransactionHistory transactions={transactions}></TransactionHistory>
    </div>
  );
};