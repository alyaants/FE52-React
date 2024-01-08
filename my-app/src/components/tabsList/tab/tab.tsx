import classNames from "classnames";

import styles from "./tab.module.scss";
import { Theme } from "../../../@types";
import { useThemeContext } from "../../../context/theme";

interface TabProps {
  title: string;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
}

const Tab = (props: TabProps) => {
  const { themeValue } = useThemeContext();

  return (
    <button
      onClick={!props.disabled ? props.onClick : undefined}
      className={classNames(styles.tab, {
        [styles.disabled]: props.disabled,
        [styles.active]: props.active,
        [styles.darkTab]: themeValue === Theme.Dark,
        [styles.darkTabActive]: props.active && themeValue === Theme.Dark,
      })}
    >
      {props.title}
    </button>
  );
};

export default Tab;
