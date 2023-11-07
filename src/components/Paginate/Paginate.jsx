import ReactPaginate from 'react-paginate';
import { useContext } from 'react';
import AppContext from "../../context";

import './Paginate.scss';

const Paginate = () => {

  const { handlePageClick, pageIndex } = useContext(AppContext);

  return (
    <ReactPaginate
      className='Paginate'
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => handlePageClick(e.selected + 1)}
      pageRangeDisplayed={5}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Paginate;
