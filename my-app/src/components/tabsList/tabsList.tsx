import Tab from "./tab/tab";
import classNames from "classnames";
import { TabsListType, TabsTypes, Theme } from "../../@types";
import styles from "./tabsList.module.scss";
import { useThemeContext } from "../../context/theme";


interface TabsListProps {
  tabsList: TabsListType;
  activeTab: TabsTypes;
  onTabClick: (tab: TabsTypes) => () => void;
};

const TabsList  = (props: TabsListProps) => {
  const { themeValue } = useThemeContext();
  return (
    <div
      className={classNames(styles.tabsContainer, { [styles.darkTabsContainer]: themeValue === Theme.Dark })}
    >
      {props.tabsList.map(({ key, title, disabled }) => (
        <Tab
          key={key}
          title={title}
          onClick={props.onTabClick(key)} //() => (tab) => setTab(tab)
          active={props.activeTab === key}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default TabsList;

