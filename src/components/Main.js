import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import reviewsData from '../utils/data.json';

const Main = ({ selectedLanguage }) => {
  const reviews = reviewsData[selectedLanguage];
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 10;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastReview = (currentPage + 1) * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = Object.keys(reviews)
    .slice(indexOfFirstReview, indexOfLastReview)
    .map((clientId) => (
      <section className= "main__posts" key={clientId}>
        <div>
          {reviews[clientId].name.split(' ')[0] +
            ' ' + 
            ((reviews[clientId].name.split(' ')[1] &&
              reviews[clientId].name.split(' ')[1][0] + ".") || '')}
        </div>
        <div>{reviews[clientId].review}</div>
        <div>{reviews[clientId].date}</div>
      </section>
    ));

  return (
    <div className='main'>
      {currentReviews}
      <ReactPaginate
        pageCount={Math.ceil(Object.keys(reviews).length / reviewsPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        pageClassName={'page-number'}
        activeClassName={'active'}
        previousLabel={'Previous'}
        nextLabel={'Next'}
      />
    </div>
  );
};

export default Main;