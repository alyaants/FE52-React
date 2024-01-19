import { useEffect, useRef, useState } from "react";
import FormPagesContainer from "../../formPagesContainer";
import Input from "../../input/input";
import styles from "../signUp/signUp.module.scss";
import { useThemeContext } from "../../../context/theme";
import classNames from "classnames";
import { Theme } from "../../../@types";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../router";
import { useDispatch } from "react-redux";
import { signInUser } from "../../../redux/reducers/authSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();

  const { themeValue } = useThemeContext();

  const navigate = useNavigate();

  const onSingUpClick = () => {
    navigate(RoutesList.SignUp);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onSubmit = () => {
    dispatch(
      signInUser({
        data: { email, password },
        callback: () => navigate(RoutesList.Home),
      })
    );
  };

  return (
    <FormPagesContainer
      title={"Sign In"}
      btnTitle={"Sign In"}
      onSubmit={onSubmit}
      additionalInfo={
        <div
          className={classNames(styles.additionalInfo, {
            [styles.darkAdditionalInfo]: themeValue === Theme.Dark,
          })}
        >
          {"Don’t have an account?"}
          <span className={styles.signIn} onClick={onSingUpClick}>
            Sign Up
          </span>
        </div>
      }
    >
      <Input
        title={"Email"}
        placeholder={"Your email"}
        value={email}
        onСhange={setEmail}
        ref={inputRef}
      />
      <Input
        title={"Password"}
        placeholder={"Your password"}
        value={password}
        onСhange={setPassword}
      />
    </FormPagesContainer>
  );
};
export default SignIn;
