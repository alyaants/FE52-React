import classNames from "classnames";
import { useThemeContext } from "../../../context/theme";
import FormPagesContainer from "../../formPagesContainer";
import styles from "./success.module.scss";
import { Theme } from "../../../@types";

const Success = () => {
  const { themeValue } = useThemeContext();
  return (
    <FormPagesContainer
      title={"Success"}
      btnTitle={"Go to home"}
      onSubmit={() => {}}
    >
      <div
        className={classNames(styles.successMessage, {
          [styles.darkSuccessMessage]: themeValue === Theme.Dark,
        })}
      >
        <div>Email confirmed</div>
        <div>Your registration is now completed</div>
      </div>
    </FormPagesContainer>
  );
};

export default Success;
