import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeContext } from "../../context/theme";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import styles from "./themeSwitcher.module.scss";
import classNames from "classnames";
import { Theme } from "../../@types";

const ThemeSwitcher = () => {
  const { themeValue, onChangeTheme } = useThemeContext();
  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.button, {
          [styles.activeButton]: themeValue === Theme.Light,
        })}
        onClick={onChangeTheme(Theme.Light)}
      >
        <FontAwesomeIcon icon={faSun} />
      </div>
      <div
        className={classNames(styles.button, {
          [styles.activeButton]: themeValue === Theme.Dark,
        })}
        onClick={onChangeTheme(Theme.Dark)}
      >
        <FontAwesomeIcon icon={faMoon} />
      </div>
    </div>
  );
};
export default ThemeSwitcher;
