import { ReactElement } from "react";
import Button, { ButtonTypes } from "../button";
import Title from "../title";
import styles from "./formPagesContainer.module.scss";
import { Children, Theme } from "../../@types";
import { useThemeContext } from "../../context/theme";
import classNames from "classnames";

interface FormPagesContainerProps {
  title: string;
  children: Children;
  btnTitle: string;
  onSubmit: () => void;
  additionalInfo?: ReactElement;
}
const FormPagesContainer = (props: FormPagesContainerProps) => {
  const { themeValue } = useThemeContext();

  return (
    <div className={classNames(styles.container, {[styles.darkContainer]: themeValue === Theme.Dark})}>
      <div className={styles.breadcrumbs}>Back to home</div>
      <Title title={props.title} />
      <div className={styles.formContainer}>
        <div className={styles.fieldsContainer}>{props.children}</div>
        <Button
          type={ButtonTypes.Primary}
          title={props.btnTitle}
          onClick={props.onSubmit}
          className={styles.button}
        />
        <div>{props.additionalInfo}</div>
      </div>
    </div>
  );
};
export default FormPagesContainer;
