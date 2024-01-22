import React, { useState } from 'react';
import './css/Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const addReview = () => {
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    if (reviews.length >= 4) {
      alert('Maximum 4 reviews allowed.');
      return;
    }

    const newReview = { name, rating, comment };

    setReviews([...reviews, newReview]);

    document.getElementById('addReviewForm').reset();
  };

  const handleSubmit = () => {
    const form = document.getElementById('addReviewForm');
    
    if (form.checkValidity()) {
      addReview();
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const displayReviews = () => {
    return reviews.map((review, index) => (
      <div key={index} className="review">
        <strong>{review.name}</strong> - Rating: {review.rating}/5<br />
        <p>{review.comment}</p>
      </div>
    ));
  };

  return (
    <div>
      <div id="reviews">
        <h2>Customer Reviews</h2>
        <div id="reviewList">{displayReviews()}</div>
      </div>

      <div id="reviewForm">
        <h2 className='riv'>Add Your Review</h2>
        <form id="addReviewForm">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required /><br />

          <label htmlFor="rating">Rating:</label>
          <select id="rating" required>
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select><br />

          <label htmlFor="comment">Comment:</label><br />
          <textarea id="comment" rows="4" required></textarea><br />

          <button type="button" onClick={handleSubmit}>Submit Review</button>
        </form>
      </div>
    </div>
  );
};
export default Reviews;