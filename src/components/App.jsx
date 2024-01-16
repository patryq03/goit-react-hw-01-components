import Section from "./Section/Section";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import user from "./data/user.json";
import uploadStats from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

export default function App(){
  return (
    <div>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
     </Section>

      <Section>
        <Statistics title="Upload stats" stats={uploadStats} />
      </Section>

      <Section>
        {/*<FriendList friends={friends} />*/}
      </Section>

      <Section>
        {/*<TransactionHistory transactions={transactions} />*/}
      </Section>
    </div>
  );
};
