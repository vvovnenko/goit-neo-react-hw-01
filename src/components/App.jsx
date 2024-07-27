import user from "../data/user.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import Profile from "./Profile/Profile.jsx";
import FriendList from "./FriendList/FriendList.jsx";
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";

const App = () => {
  return (
    <>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        image={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
