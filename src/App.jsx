import { Outlet } from "react-router-dom";
import Footer from "./Pages/SharedPage/Footer";
import NavBar from "./Pages/SharedPage/NavBar";
import { Helmet } from "react-helmet-async";
import Sidebar from "./Pages/SharedPage/Index";

function App() {
  return (
    <>
      <Helmet>
        <title>SportCamp | Home</title>
      </Helmet>
      <NavBar></NavBar>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
