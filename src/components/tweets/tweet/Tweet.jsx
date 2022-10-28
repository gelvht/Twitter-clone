import { useState } from "react";

import classes from "./Tweet.module.css";

import TweetBar from "../tweetBar/TweetBar";
import ProfileImage from "../../profile/profileImage/ProfileImage";

const Tweet = ({
  id,
  username,
  tweetText,
  createdAt,
  retweets,
  likes,
  comments,
}) => {
  const [tweetLikes, setTweetLikes] = useState(likes);

  const monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
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
        <TweetBar
          tweetID={id}
          comments={comments}
          retweets={retweets}
          likes={tweetLikes}
          setLikes={setTweetLikes}
        />
      </div>
    </div>
  );
};
export default Tweet;
