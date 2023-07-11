import { Outlet } from "react-router-dom";
import Footer from "./Pages/SharedPage/Footer";
import NavBar from "./Pages/SharedPage/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
