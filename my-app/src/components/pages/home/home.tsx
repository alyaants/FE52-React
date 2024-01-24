import { useEffect, useMemo, useState } from "react";
import { TabsTypes } from "../../../@types";
import CardsList from "../../cardsList/cardsList";
import TabsList from "../../tabsList/tabsList";
import Title from "../../title/title";
import styles from "./home.module.scss";
import SelectedPost from "./selectedPostModal/selectedPostModal";
import SelectedImg from "./selectedImg/selectedImg";
import { useDispatch, useSelector } from "react-redux";
import {
  PostSelectors,
  getMyPosts,
  getPostsList,
} from "../../../redux/reducers/postSlice";
import { AuthSelectors } from "../../../redux/reducers/authSlice";

const Home = () => {
  const [activeTab, setActiveTab] = useState(TabsTypes.All);

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);

  const allPostsList = useSelector(PostSelectors.getPostsList);
  const myPosts = useSelector(PostSelectors.getMyPosts);

  const tabsList = useMemo(
    () => [
      { key: TabsTypes.All, title: "All Posts", disabled: false },
      { key: TabsTypes.Popular, title: "Popular Posts", disabled: false },
      { key: TabsTypes.MyPosts, title: "My posts", disabled: !isLoggedIn },
    ],
    [isLoggedIn]
  );

  useEffect(() => {
    if (activeTab === TabsTypes.MyPosts) {
      dispatch(getMyPosts());
    } else {
      dispatch(getPostsList());
    }
  }, [activeTab]);
  
  const onTabClick = (tab: TabsTypes) => () => {
    setActiveTab(tab);
  };

  const tabsContextSwitcher = () => {
    if (activeTab === TabsTypes.MyPosts) {
      return myPosts;
    } else {
      return allPostsList;
    }
  };
  
  return (
    <div>
      <Title title={"Blog"} className={styles.pageTitle} />
      <TabsList
        tabsList={tabsList}
        activeTab={activeTab}
        onTabClick={onTabClick}
      />
      <CardsList cardsList={tabsContextSwitcher()} />
      <SelectedPost />
      <SelectedImg />
    </div>
  );
};
export default Home;

// 19:48
