import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FirstPage from "../pages/FirstPage";
import { getUser } from "../Api/Api";
const Routing = () => {
  const isLoggedIn= getUser()
  return (
      <Routes>
        <Route path="/" element={isLoggedIn?<HomePage/>:<FirstPage />} />
        <Route path="/home" element={<HomePage/>} />
      </Routes>
  );
};
export default Routing;
