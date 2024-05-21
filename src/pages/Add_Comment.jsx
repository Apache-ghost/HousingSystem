import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const AddComment = ({ onAddComment }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && text.trim()) {
      onAddComment({ name, text, rating, image: './public/images/profile.jpg' });
      setName('');
      setText('');
      setRating(0);
    }
  };

  return (
    <div className="add-comment-container">
      <h2 className="add-comment-title">Add Your Testimonial</h2>
      <form onSubmit={handleSubmit} className="add-comment-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="add-comment-input"
        />
        <textarea
          placeholder="Your Testimonial"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="add-comment-textarea"
        ></textarea>
        <div className="add-comment-rating">
          <span>Rate your experience:</span>
          {[1, 2, 3, 4, 5].map((value) => (
            <FontAwesomeIcon
              key={value}
              icon={faStar}
              className={`star ${value <= rating ? 'active' : ''}`}
              onClick={() => handleRatingChange(value)}
            />
          ))}
        </div>
        <button type="submit" className="add-comment-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddComment;