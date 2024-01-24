import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RoutesList } from "../router";
import { useDispatch, useSelector } from "react-redux";
import {
  PostSelectors,
  getSearchedPosts,
} from "../../../redux/reducers/postSlice";
import Title from "../../title/title";
import PostCard, { PostCardSize } from "../../postCard/postCard";
import useCardActions from "../../../hooks/useCardsActions";
import style from "./search.module.scss";
import EmptyState from "../../emptyState/emptyState";

const Search = () => {
  const { onStatusClick, onFavouriteClick, onMoreClick, onImageClick } =
    useCardActions();

  const { search } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchedPosts = useSelector(PostSelectors.getSearchedPosts);

  useEffect(() => {
    if (!search) {
      navigate(RoutesList.Home);
    } else {
      dispatch(getSearchedPosts(search));
    }
  }, [search]);
  return (
    <div>
      <Title title={`Search results: ${search}`} />
      <div className={style.container}>
        {searchedPosts.length ? (
          <>
            {searchedPosts.map((post) => {
              return (
                <PostCard
                  size={PostCardSize.Search}
                  onMoreClick={onMoreClick(post)}
                  onImageClick={onImageClick(post.image)}
                  onStatusClick={onStatusClick(post)}
                  onFavouriteClick={onFavouriteClick(post)}
                  {...post}
                />
              );
            })}
          </>
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
