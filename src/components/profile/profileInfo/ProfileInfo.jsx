import { useState } from "react";

import classes from "./ProfileInfo.module.css";

import { GetFollowAPI } from "../../../Api/Services";
import ProfileImage from "../profileImage/ProfileImage";

const ProfileInfo = ({ username, following, followers }) => {
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
        <div>
          <span className={classes.profile__follow}>{following} following</span>
          <span>{followers} followers</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
