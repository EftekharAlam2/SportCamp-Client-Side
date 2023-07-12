import { Outlet } from "react-router-dom";
import Footer from "./Pages/SharedPage/Footer";
import NavBar from "./Pages/SharedPage/NavBar";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>SportCamp | Home</title>
      </Helmet>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
