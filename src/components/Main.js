import React from 'react';
import ReactPaginate from 'react-paginate';
import reviewsData from '../utils/data.json';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
    this.reviews = reviewsData[this.props.selectedLanguage];
    this.reviewsPerPage = 10;
  }

  handlePageChange = ({ selected }) => {
    this.setState({ currentPage: selected });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedLanguage !== this.props.selectedLanguage) {
      this.reviews = reviewsData[this.props.selectedLanguage];
      this.setState({ currentPage: 0 });
    }
  }

  render() {
    const currentPage = this.state.currentPage;
    const reviews = this.reviews;
    const reviewsPerPage = this.reviewsPerPage;

    const indexOfLastReview = (currentPage + 1) * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = Object.keys(reviews)
      .slice(indexOfFirstReview, indexOfLastReview)
      .map((clientId) => (
        <section className='main__posts' key={clientId}>
          <div>
            {reviews[clientId].name.split(' ')[0] +
              ' ' +
              ((reviews[clientId].name.split(' ')[1] &&
                reviews[clientId].name.split(' ')[1][0] + '.') ||
                '')}
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
          onPageChange={this.handlePageChange}
          containerClassName={'pagination'}
          pageClassName={'page-number'}
          activeClassName={'active'}
          previousLabel={'Previous'}
          nextLabel={'Next'}
        />
      </div>
    );
  }
}

export default Main;

/*import React, { useState } from 'react';
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

export default Main;*/
