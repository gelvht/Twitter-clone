import ProfileInfo from "../profile/ProfileInfo";
import TweetsList from "../tweets/TweetsList";
import "./SearchResult.css";
const SearchResult = ({ username, user }) => {
  console.log(username, user);
  return (
    <div className="result">
      <ProfileInfo
        username={username}
        following={user.followings.length}
        followers={user.followers.length}
      />
      <TweetsList tweets={user.tweets} />
    </div>
  );
};
export default SearchResult;
