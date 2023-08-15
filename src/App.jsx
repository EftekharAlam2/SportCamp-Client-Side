import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./Pages/SharedPage/Footer";
import NavBar from "./Pages/SharedPage/NavBar";
import { Helmet } from "react-helmet-async";
import Sidebar from "./Pages/SharedPage/Sidebar";
import RootLayout from "./Pages/SharedPage/RootLayout";
import Login from "./Pages/User/Login";

function App() {
  return (
    <>
      <Helmet>
        <title>SportCamp | Home</title>
      </Helmet>
      <NavBar></NavBar>
      <RootLayout>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </RootLayout>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
