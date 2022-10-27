import { useState } from "react";
import { GetFollowAPI } from "../../Api/Services";
import ProfileImage from "../../common/ProfileImage";
import classes from "./ProfileInfo.module.css";
const ProfileInfo = ({ username, bio, following, followers, createdDate }) => {
  const [buttonText, setButtonText] = useState({
    class: "btn__blue",
    text: "Follow",
  });
  const [errorMessage, setErrorMessage] = useState();
  const followHandler = async () => {
    try {
      await GetFollowAPI(username).then(
        (response) => {
          setButtonText({ class: "btn__white", text: "Following" });
        },
        (error) => {
          setErrorMessage(error.response.data.message);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={classes.profile__header}>
      <div className={classes.profile__body}>
        <p className="search__error">{errorMessage}</p>
        <div className={classes.profile__info}>
          <ProfileImage username={username} />
          <button
            className={`btn btn__tweet--width ${buttonText.class}`}
            onClick={followHandler}
          >
            {buttonText.text}
          </button>
        </div>
        <h2 className={classes.profile__username}>{username}</h2>
        {/* <p className={classes.profile__bio}>{bio}</p> */}
        {/* <div className={classes.profile__createdDate}>
          <span className="material-symbols-outlined">calendar_month</span>
          Joined {createdDate}
        </div> */}
        <div>
          <span className={classes.profile__follow}>{following} following</span>
          <span>{followers} followers</span>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
