import { Route, Routes } from "react-router-dom";

import { getUser } from "../../../Api/Api";
import HomePage from "../../../pages/homePage/HomePage";
import FirstPage from "../../../pages/firstPage/FirstPage";

const Routing = () => {
  
  const isLoggedIn= getUser();

  return (
      <Routes>
        <Route path="/" element={isLoggedIn?<HomePage/>:<FirstPage />} />
        <Route path="/home" element={<HomePage/>} />
      </Routes>
  );
};
export default Routing;
