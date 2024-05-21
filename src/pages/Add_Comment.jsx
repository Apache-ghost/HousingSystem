import React, { useState } from 'react';


const AddComment = ({ onAddComment }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && text.trim()) {
      onAddComment({ name, text, image: './public/images/profile.jpg' });
      setName('');
      setText('');
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
        <button type="submit" className="add-comment-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddComment;