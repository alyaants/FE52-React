import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/home";
import SignUp from "./signUp/signUp";
import RegistrationConfirmation from "./registrationConfirmation/registrationConfirmation";
import Header from "../header/header";
import SignIn from "./signIn/signIn";
import Success from "./success/success";
import SelectedPost from "./home/selectedPost/selectedPost";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelectors, getUserInfo } from "../../redux/reducers/authSlice";
import { useEffect } from "react";
import Search from "./search/serach";
export enum RoutesList {
  Home = "/",
  SignUp = "/sign-up",
  SignIn = "/sign-in",
  RegistrationConfirmation = "/activate/:uid/:token",
  Success = "/sign-in/success",
  SelectedPost = "/post/:id",
  Search = "/posts/:search",
  Default = "*",
}

const Router = () => {
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserInfo());
    }
  }, [isLoggedIn]);

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
          <Route path={RoutesList.Search} element={<Search />} />
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
