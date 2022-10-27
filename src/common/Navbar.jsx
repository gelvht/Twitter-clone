import { HomeCircle } from "@emotion-icons/boxicons-regular/HomeCircle";
import { LogOutCircle } from "@emotion-icons/boxicons-regular/LogOutCircle";
import classes from "./Navbar.module.css";
import { Link ,useNavigate} from "react-router-dom";
import { Logout } from "../Api/Api";

const Navbar = () => {
  const navigate = useNavigate();

const logoutHandler=()=>{
  Logout();
  navigate("/");
}
  return (
    <div className={classes.navbar}>
      <Link to={"/home"} className={classes.navbar__item}>
        <HomeCircle className={classes.navbar__icon} />
        <span> Home</span>
      </Link>
      <div className={classes.navbar__item} onClick={logoutHandler}>
      <LogOutCircle className={classes.navbar__icon}/>
      <span> Logout</span>
      </div>
    </div>
  );
};
export default Navbar;
