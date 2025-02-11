import { Outlet } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop/ScrollToTop";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <div className="min-h-[calc(100vh-429px)] bg-white dark:bg-slate-900 py-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
