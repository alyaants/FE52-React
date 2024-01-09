import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/home";
import SignUp from "./signUp/signUp";
import RegistrationConfirmation from "./registrationConfirmation/registrationConfirmation";
import Header from "../header/header";
import SignIn from "./signIn/signIn";
import Success from "./success/success";
export enum RoutesList {
  Home = "/",
  SignUp = "/sign-up",
  RegistrationConfirmation = "/sign-up/confirm",
  SignIn = "/sign-in",
  Success =  "/sign-in/success",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Home} element={<Header />}>
          <Route path={RoutesList.Home} element={<Home />} />
          <Route path={RoutesList.SignUp} element={<SignUp />} />
          <Route
            path={RoutesList.RegistrationConfirmation}
            element={<RegistrationConfirmation />}
          />
          <Route path={RoutesList.SignIn} element={<SignIn />} />
          <Route path={RoutesList.Success} element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
