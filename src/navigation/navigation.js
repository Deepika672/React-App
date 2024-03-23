import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../pages/home-screen";
import AboutScreen from "../pages/about-screen";
import ContactScreen from "../pages/contact-screen";
import SettingScreen from "../pages/setting-screen";
import ProductScreen from "../pages/product-screen";
import InvalidScreen from "../pages/invalid-screen";
import { createContext, useState } from "react";
import RegistrationScreen from "../pages/preroutes/registration";
import LoginScreen from "../pages/preroutes/login";

export const MessageInformation = createContext();
const NavigationStack = () => {
  const [message, setMessage] = useState("Good morning");
  const [login, setLogin] = useState(false);

  const changeMessage = () => {
    setMessage("Good Evening");
  };
  const loginHandler = () => {
    setLogin(true);
  };

  return (
    <BrowserRouter>
      <MessageInformation.Provider
        value={{
          message,
          greetings: "Congrats",
          messageChanger: changeMessage,
          changeLogin: loginHandler,
        }}
      >
        <Routes>
          {login ? (
            <>
              <Route path="/" Component={HomeScreen} />
              <Route path="/about" Component={AboutScreen} />
              <Route path="/contact" Component={ContactScreen} />
              <Route path="/setting" Component={SettingScreen} />
              <Route path="/:category/:product" Component={ProductScreen} />
              <Route path="*" Component={InvalidScreen} />
            </>
          ) : (
            <>
              <Route path="/register" Component={RegistrationScreen} />
              <Route path="/" Component={LoginScreen} />
            </>
          )}
        </Routes>
      </MessageInformation.Provider>
    </BrowserRouter>
  );
};
export default NavigationStack;
