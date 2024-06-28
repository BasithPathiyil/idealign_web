import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Pagination2({ page, setPage, totalCounts,itemsPerPage }) {
  const totalPages = Math.ceil(totalCounts / itemsPerPage);

  const handlePageClick = (pageNum) => {
    setPage(pageNum);
  };

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <ul className="cs-pagination_box cs-center cs-white_color cs-mp0 cs-semi_bold">
      {page > 1 && (
        <li>
          <Link to="#" className="cs-pagination_item cs-center" onClick={handlePrevClick}>
            <Icon icon="akar-icons:chevron-left" />
          </Link>
        </li>
      )}
      {Array.from({ length: totalPages }, (_, index) => (
        <li key={index + 1}>
          <Link
            className={`cs-pagination_item cs-center ${page === index + 1 ? 'active' : ''}`}
            to="#"
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </Link>
        </li>
      ))}
      {page < totalPages && (
        <li>
          <Link to="#" className="cs-pagination_item cs-center" onClick={handleNextClick}>
            <Icon icon="akar-icons:chevron-right" />
          </Link>
        </li>
      )}
    </ul>
  );
}
