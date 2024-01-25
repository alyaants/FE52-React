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
import { PER_PAGE } from "../../../utiles/constants";
import Paginate from "../../pagination/pagination";

const Home = () => {
  const [activeTab, setActiveTab] = useState(TabsTypes.All);

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);

  const allPostsList = useSelector(PostSelectors.getPostsList);
  const totalCount = useSelector(PostSelectors.getTotalPostsCount);
  const myPosts = useSelector(PostSelectors.getMyPosts);

  const [currentPage, setCurrentPage] = useState(1); // текущая страница на которой мы находимся

  const pagesCount = useMemo(
    /// сколько итого у нас страниц
    () => Math.ceil(totalCount / PER_PAGE),
    [totalCount]
  );

  const isListLoading = useSelector(PostSelectors.getPostsLoading);

  const tabsList = useMemo(
    () => [
      { key: TabsTypes.All, title: "All Posts", disabled: false },
      { key: TabsTypes.Popular, title: "Popular Posts", disabled: false },
      { key: TabsTypes.MyPosts, title: "My posts", disabled: !isLoggedIn },
    ],
    [isLoggedIn]
  );

  useEffect(() => {  /// сколько нужно пропустить постов (сколько мы уже посмотрели)
    if (activeTab === TabsTypes.MyPosts) {
      dispatch(getMyPosts());
    } else {
      const offset = (currentPage - 1) * PER_PAGE;
      dispatch(getPostsList({ offset, isOverwrite: true }));
    }
  }, [activeTab, currentPage]);

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

  const onPageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <div>
      <Title title={"Blog"} className={styles.pageTitle} />
      <TabsList
        tabsList={tabsList}
        activeTab={activeTab}
        onTabClick={onTabClick}
      />
      <CardsList cardsList={tabsContextSwitcher()} isLoading={isListLoading} />
      <Paginate
        pagesCount={pagesCount}
        onPageChange={onPageChange}
        currentPage={currentPage}
      />
      <SelectedPost />
      <SelectedImg />
    </div>
  );
};
export default Home;
