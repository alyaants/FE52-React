import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./pagination.module.scss";
import classNames from "classnames";

interface PaginationProps  {
  pagesCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  currentPage: number;
};
const Paginate  = (props:PaginationProps) => {
  return (
    <ReactPaginate
      pageCount={props.pagesCount}
      onPageChange={props.onPageChange}
      containerClassName={styles.pagesContainer}
      pageClassName={styles.pageNumber}
      breakClassName={styles.pageNumber}
      breakLinkClassName={styles.linkPage}
      activeLinkClassName={styles.linkPage}
      pageLinkClassName={styles.linkPage}
      activeClassName={styles.activePageNumber}
      nextClassName={classNames(styles.arrowButton, {
        [styles.blockedButton]: props.currentPage === props.pagesCount,
      })}
      previousClassName={classNames(styles.arrowButton, {
        [styles.blockedButton]: props.currentPage === 1,
      })}
      previousLinkClassName={styles.linkPage}
      nextLinkClassName={styles.linkPage}
    />
  );
};

export default Paginate;