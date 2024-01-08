import classNames from "classnames";
import { useThemeContext } from "../../../context/theme";
import FormPagesContainer from "../../formPagesContainer";
import { Theme } from "../../../@types";
import styles from "./registrationConfirmation.module.scss"

const RegistrationConfirmation = () => {
  const { themeValue } = useThemeContext();
  return (
    <FormPagesContainer
      title={"Registration Confirmation"}
      btnTitle={"Go to home"}
      onSubmit={() => {}}
    >
      <div
        className={classNames(styles.forgotPassword, {
          [styles.darkForgotPassword]: themeValue === Theme.Dark,
        })}
      >
        {
          " Please activate your account with the activation link in the email example@gmail.com. Please, check your email"
        }
      </div>
    </FormPagesContainer>
  );
};

export default RegistrationConfirmation;
