import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import SignUp from "./signUp";
import RegistrationConfirmation from "./registrationConfirmation";
import Header from "../header";
import SignIn from "./signIn";
import Success from "./success";
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
