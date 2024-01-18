import { useEffect, useMemo, useState } from "react";
import { TabsTypes } from "../../../@types";
import CardsList from "../../cardsList/cardsList";
import TabsList from "../../tabsList/tabsList";
import Title from "../../title/title";
import styles from "./home.module.scss";
import SelectedPost from "./selectedPostModal/selectedPostModal";
import SelectedImg from "./selectedImg/selectedImg";
import { useDispatch, useSelector } from "react-redux";
import { PostSelectors, getPostsList } from "../../../redux/reducers/postSlice";


const Home = () => {
  const [activeTab, setActiveTab] = useState(TabsTypes.All);
  const [isLoggedIn, setLoggedIn] = useState(false);
  
  const dispatch = useDispatch();
  const cardsList = useSelector(PostSelectors.getPostsList);



  const tabsList = useMemo(
    () => [
      { key: TabsTypes.All, title: "All Posts", disabled: false },
      { key: TabsTypes.Popular, title: "Popular Posts", disabled: false },
      { key: TabsTypes.MyFavorites, title: "Favorite", disabled: !isLoggedIn },
    ],
    [isLoggedIn]
  );

  useEffect(() => {
    dispatch(getPostsList());
  }, []);

  const onTabClick = (tab: TabsTypes) => () => {
    setActiveTab(tab);
    if (tab === TabsTypes.Popular) {
      setLoggedIn(true);
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
      <CardsList cardsList={cardsList} />
      <SelectedPost />
      <SelectedImg />
    </div>
  );
};
export default Home;




// 19:48
