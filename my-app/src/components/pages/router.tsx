import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/home";
import SignUp from "./signUp/signUp";
import RegistrationConfirmation from "./registrationConfirmation/registrationConfirmation";
import Header from "../header/header";
import SignIn from "./signIn/signIn";
import Success from "./success/success";
import SelectedPost from "./home/selectedPost/selectedPost";
export enum RoutesList {
  Home = "/",
  SignUp = "/sign-up",
  RegistrationConfirmation = "/activate/:uid/:token",
  SignIn = "/sign-in",
  Success = "/sign-in/success",
  SelectedPost = "/post/:id",
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
          <Route path={RoutesList.SelectedPost} element={<SelectedPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
