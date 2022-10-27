import { useState, useEffect } from "react";
import {Heart} from "@emotion-icons/fa-regular/Heart";
import {Comment} from "@emotion-icons/fa-regular/Comment";
import {Retweet} from "@emotion-icons/fa-solid/Retweet";
import {DeleteBin} from "@emotion-icons/remix-line/DeleteBin";
import classes from "./TweetBar.module.css";
import { GetLikeAPI, RemoveProductAPI } from "../Api/Services";
const TweetBar = ({ tweetID, comments, retweets, likes, setLikes }) => {
  const likeHandler = async () => {
    try {
      await GetLikeAPI(tweetID).then(
        (response) => {
          setLikes(prev=>prev+1);
          
        },
        (error) => console.log(error)
      );
    } catch (err) {
      console.log(err);
    }
  };
  const deleteHandler = async () => {

    try {
      await RemoveProductAPI(tweetID).then(
        (response) => {
          console.log(response);
        },
        (error) => console.log(error)
      );
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div className={classes.tweetbar}>
      <div className={classes.tweetbar__item}>
        <Comment className={classes.tweetbar__icons}/>
        <span>{comments}</span>
      </div>
      {/* <div className={classes.tweetbar__item}>
        <Retweet className={classes.tweetbar__icons} onClick={retweetHandler}/>
        <span>{retweets}</span>
      </div> */}
      <div  className={classes.tweetbar__item}>
        <Heart className={classes.tweetbar__icons} onClick={likeHandler}/>
        <span>{likes}</span>
      </div>
      <div className={classes.tweetbar__item}>
      <DeleteBin className={classes.tweetbar__icons} onClick={deleteHandler}/>
      </div>
    </div>
  );
};
export default TweetBar;
