import Footer from "./Pages/SharedPage/Footer";
import { Helmet } from "react-helmet-async";
import RootLayout from "./Pages/SharedPage/RootLayout";
import Login from "./Pages/User/Login";
import { Route, Routes } from "react-router-dom";
import Registration from "./Pages/User/Registration";

function App() {
  return (
    <>
      <Helmet>
        <title>SportCamp | Home</title>
      </Helmet>
      <RootLayout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </RootLayout>
      <Footer></Footer>
    </>
  );
}

export default App;
