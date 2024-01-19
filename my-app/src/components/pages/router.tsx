import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/home";
import SignUp from "./signUp/signUp";
import RegistrationConfirmation from "./registrationConfirmation/registrationConfirmation";
import Header from "../header/header";
import SignIn from "./signIn/signIn";
import Success from "./success/success";
import SelectedPost from "./home/selectedPost/selectedPost";
import { useSelector } from "react-redux";
import { AuthSelectors } from "../../redux/reducers/authSlice";
import { useEffect } from "react";
export enum RoutesList {
  Home = "/",
  SignUp = "/sign-up",
  RegistrationConfirmation = "/activate/:uid/:token",
  SignIn = "/sign-in",
  Success = "/sign-in/success",
  SelectedPost = "/post/:id",
  Default = "*",
}

const Router = () => {
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);

  // useEffect(() => {
  //   if (isLaoggedIn) {
  //     disptch(getUserInfo());
  //   }
  // }, [isLoggedIn]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Home} element={<Header />}>
          <Route path={RoutesList.Home} element={<Home />} />
          <Route
            path={RoutesList.SignUp}
            element={
              !isLoggedIn ? <SignUp /> : <Navigate to={RoutesList.Home} />
            }
          />
          <Route
            path={RoutesList.RegistrationConfirmation}
            element={
              !isLoggedIn ? (
                <RegistrationConfirmation />
              ) : (
                <Navigate to={RoutesList.Home} />
              )
            }
          />
          <Route
            path={RoutesList.SignIn}
            element={
              !isLoggedIn ? <SignIn /> : <Navigate to={RoutesList.Home} />
            }
          />
          <Route
            path={RoutesList.Success}
            element={
              !isLoggedIn ? <Success /> : <Navigate to={RoutesList.Home} />
            }
          />
          <Route path={RoutesList.SelectedPost} element={<SelectedPost />} />
          <Route
            path={RoutesList.Default}
            element={<Navigate to={RoutesList.Home} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
