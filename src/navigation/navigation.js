import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../pages/home-screen";
import AboutScreen from "../pages/about-screen";
import ContactScreen from "../pages/contact-screen";
import SettingScreen from "../pages/setting-screen";
import ProductScreen from "../pages/product-screen";
const NavigationStack = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomeScreen} />
        <Route path="/about" Component={AboutScreen} />
        <Route path="/contact" Component={ContactScreen} />
        <Route path="/setting" Component={SettingScreen} />
        <Route path="/:category/:product" Component={ProductScreen} />

      </Routes>
    </BrowserRouter>
  );
};
export default NavigationStack;
