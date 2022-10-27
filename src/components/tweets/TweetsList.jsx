import Tweet from "./Tweet";

const TweetsList = ({ tweets }) => {
  const tweetItems = tweets.map((tweet) => {
    return (
      <Tweet
        key={tweet.id}
        id={tweet.id}
        username={tweet.user.username}
        tweetText={tweet.body}
        createdAt={tweet.createdAt}
        comments={tweet.comments.length}
        likes={tweet.favcount}
        retweets={tweet.reply}
      />
    );
  });
  return <>{tweetItems}</>;
};
export default TweetsList;
