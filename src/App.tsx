import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import GlobalStyles from "./styles/GlobalStyle";
import "@styles/font.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Outlet />

      <Footer />
    </>
  );
}

export default App;
