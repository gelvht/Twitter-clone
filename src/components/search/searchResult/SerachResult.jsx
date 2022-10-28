import "./SearchResult.css";

import ProfileInfo from "../../profile/profileInfo/ProfileInfo";
import TweetsList from "../../tweets/tweetList/TweetsList";

const SearchResult = ({ username, user }) => {
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
