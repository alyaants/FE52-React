import { useEffect, useRef, useState } from "react";
import FormPagesContainer from "../../formPagesContainer";
import Input from "../../input";
import styles from "./signUp.module.scss";
import { useThemeContext } from "../../../context/theme";
import classNames from "classnames";
import { Theme } from "../../../@types";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { themeValue } = useThemeContext();

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <FormPagesContainer
      title={"Sign Up"}
      btnTitle={"Sign Up"}
      onSubmit={() => {}}
      additionalInfo={
        <div
          className={classNames(styles.additionalInfo, {
            [styles.darkAdditionalInfo]: themeValue === Theme.Dark,
          })}
        >
          {"Already have an account?"}{" "}
          <span className={styles.signIn}>Sign In</span>
        </div>
      }
    >
      <Input
        title={"Name"}
        placeholder={"Your name"}
        value={name}
        onСhange={setName}
        ref={inputRef}
      />
      <Input
        title={"Email"}
        placeholder={"Your email"}
        value={email}
        onСhange={setEmail}
      />
      <Input
        title={"Password"}
        placeholder={"Your password"}
        value={password}
        onСhange={setPassword}
      />
      <Input
        title={"Confirm Password"}
        placeholder={"Confirm password"}
        value={confirmPassword}
        onСhange={setConfirmPassword}
      />
    </FormPagesContainer>
  );
};
export default SignUp;