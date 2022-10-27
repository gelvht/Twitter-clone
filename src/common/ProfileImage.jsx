import classes from "./ProfileImage.module.css";
import randomColor from "randomcolor";
const ProfileImage=({username})=>{
    const firstLetter= username.charAt(0).toUpperCase();
    const color = randomColor();
return(
    <div className={classes.profile__image} style={{backgroundColor: color}}>
        {firstLetter}
    </div>
)
}
export default ProfileImage;