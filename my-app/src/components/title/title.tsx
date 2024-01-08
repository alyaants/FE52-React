import classNames from "classnames";
import styles from "./title.module.scss";
import { useThemeContext } from "../../context/theme";
import { Theme } from "../../@types";
interface TitleProps {
  title: string;
  className?: string;
}
const Title = (props: TitleProps) => {
  const { themeValue } = useThemeContext();
  return (
    <div
      className={classNames(styles.title, props.className, {
        [styles.darkTitle]: themeValue === Theme.Dark,
      })}
    >
      {props.title}
    </div>
  );
};
export default Title;
