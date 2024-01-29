import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RoutesList } from "../router";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  PostSelectors,
  getSearchedPosts,
} from "../../../redux/reducers/postSlice";
import Title from "../../title/title";
import PostCard, { PostCardSize } from "../../postCard/postCard";
import useCardActions from "../../../hooks/useCardsActions";
import style from "./search.module.scss";
import EmptyState from "../../emptyState/emptyState";
import { PER_PAGE } from "../../../utiles/constants";
import Loader from "../../loader/loader";
import classNames from "classnames";
import { useThemeContext } from "../../../context/theme";
import { Theme } from "../../../@types";

const Search = () => {
  const { onStatusClick, onFavouriteClick, onMoreClick, onImageClick } =
    useCardActions();
  const { themeValue } = useThemeContext();
  const { search } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchedPosts = useSelector(PostSelectors.getSearchedPosts);
  const totalPosts = useSelector(PostSelectors.getTotalSearchedPosts);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!search) {
      navigate(RoutesList.Home);
    } else {
      const offset = (currentPage - 1) * PER_PAGE;
      dispatch(getSearchedPosts({ search, offset, isOverwrite: false }));
    }
  }, [dispatch, navigate, search, currentPage]);

  const onNextReached = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <div>
      <Title title={`Search results: ${search}`} />
      <div
        className={classNames(style.container, {
          [style.darkContainer]: themeValue === Theme.Dark,
        })}
        id="scrollableDiv"
      >
        {searchedPosts.length ? (
          <InfiniteScroll
          next={onNextReached}
          scrollThreshold={0.7}
          hasMore={searchedPosts.length < totalPosts}
          loader={<Loader />}
          dataLength={searchedPosts.length}
          scrollableTarget="scrollableDiv"
          className={style.postCards}
          >
            {searchedPosts.map((post) => {
              return (
                <PostCard
                  key={post.id}
                  size={PostCardSize.Search}
                  onMoreClick={onMoreClick(post)}
                  onImageClick={onImageClick(post.image)}
                  onStatusClick={onStatusClick(post)}
                  onFavouriteClick={onFavouriteClick(post)}
                  {...post}
                />
              );
            })}
          </InfiniteScroll>
        ) : (
          <EmptyState
            title={"Nothing was found..."}
            description={"Try another search request"}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
