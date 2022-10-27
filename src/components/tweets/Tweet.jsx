import TweetBar from "../../common/TweetBar";
import ProfileImage from "../../common/ProfileImage";
import classes from "./Tweet.module.css";
import { useState } from "react";
const Tweet = ({ id, username, tweetText, createdAt, retweets, likes, comments,}) => 
{
  const [tweetLikes, setTweetLikes] = useState(likes);
  const monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec", ];
  const date = new Date(createdAt);
  const month = monthNames[date.getMonth()];
  const day = date.getDay();
  return (
    <div className={classes.tweet}>
      <ProfileImage username={username} />
      <div className={classes.tweet__body}>
        <div className={classes.tweet__header}>
          <h3>{username}</h3>
          <span className={classes.createdAt}>{`. ${month} ${day}`}</span>
        </div>
        <p>{tweetText}</p>
        <TweetBar tweetID={id} comments={comments} retweets={retweets} likes={tweetLikes} setLikes={setTweetLikes}/>
      </div>
    </div>
  );
};
export default Tweet;
