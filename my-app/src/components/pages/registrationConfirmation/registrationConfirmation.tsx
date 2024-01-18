import classNames from "classnames";
import { useThemeContext } from "../../../context/theme";
import FormPagesContainer from "../../formPagesContainer";
import { Theme } from "../../../@types";
import styles from "./registrationConfirmation.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { activateUser } from "../../../redux/reducers/authSlice";
import { RoutesList } from "../router";

const RegistrationConfirmation = () => {
  const { themeValue } = useThemeContext();
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = () => {
    if (uid && token) {
      dispatch(
        activateUser({
          data: { uid, token },
          callback: () => navigate(RoutesList.SignIn),
        })
      );
    }
  };
  return (
    <FormPagesContainer
      title={"Registration Confirmation"}
      btnTitle={"Activate"}
      onSubmit={onSubmit}
    >
      <div
        className={classNames(styles.forgotPassword, {
          [styles.darkForgotPassword]: themeValue === Theme.Dark,
        })}
      >
        {" Please activate your account with clicking on button."}
      </div>
    </FormPagesContainer>
  );
};

export default RegistrationConfirmation;
