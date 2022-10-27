import ProfileImage from "../../common/ProfileImage";
import "./NewTweet.css";
import { useState } from "react";
import { SetTweetAPI } from "../../Api/Services";
const NewTweet = ({ username }) => {
  const [tweetBody, setTweetBody] = useState("");
  const [reply, setReply] = useState(undefined);
  let tweetTags = [];
  const findHashtags = (text) => {
    var regex = /\B\#\w\w+\b/g;
    tweetTags = text.match(regex);
  };

  findHashtags(tweetBody);
  const tweetHandler = async (e) => {
    e.preventDefault();
    try {
      await SetTweetAPI(tweetBody, tweetTags?.length && tweetTags, reply).then(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="newTweet" onSubmit={tweetHandler}>
      <div className="newTweet__user">
        <ProfileImage username={username} />
        <textarea
          name="newTweet"
          id="newTweet"
          placeholder="What's happening?"
          className="newTweet__text"
          value={tweetBody}
          onChange={(e) => setTweetBody(e.target.value)}
        />
      </div>
      <label htmlFor="reply"  className="newTweet__reply" >Reply to : 
      <input type="text" name="reply" id="reply"  className="reply__text" value={reply} onChange={e=>setReply(e.target.value)}/>
      </label>
      <button className="btn btn__blue btn__tweet--width btn__tweet">
        Tweet
      </button>
    </form>
  );
};
export default NewTweet;
