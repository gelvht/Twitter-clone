import NewTweet from "../components/tweets/NewTweet";
import Navbar from "../common/Navbar";
import classes from "./HomePage.module.css";
import TweetsList from "../components/tweets/TweetsList";
import { GetFeedAPI } from "../Api/Services";
import { useEffect, useState } from "react";
import { Logout } from "../Api/Api";
import { useNavigate } from "react-router-dom";
import SearchBox from "../components/search/SearchBox"
const HomePage = () => {
const navigate=useNavigate();
  const [feed, setFeed] = useState([]);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    GetFeedAPI().then(response=>{
      setUserName(response.data.username)
      setFeed(response.data.tweets);
    },error=>{
      if(error.response.status===401){
        Logout();
        navigate("/")
      }
    })
  }, []);
  return (
    <div className={classes.home}>
      <Navbar />
      <div className={classes.home__tweets}>
        <h2 className={classes.home__tweets__title}>Home</h2>
        <NewTweet username={userName}/>
        <TweetsList tweets={feed} />
      </div>
      <SearchBox/>
    </div>
  );
};
export default HomePage;
