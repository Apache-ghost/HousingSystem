import React from 'react';

const testimonials = [
  {
    image: './public/images/profile.jpg',
    name: 'Guegouo M. Guiddel',
    text: 'I love this app, it is so user-friendly.'
  },
  {
    image: './public/images/profile.jpg',
    name: 'John Doe',
    text: 'This app has made my life so much easier.'
  },
  {
    image: './public/images/profile.jpg',
    name: 'Jane Smith',
    text: 'The best app Ive ever used!'
  }
];

function Testimonial() {
  return (
    <div className="card-container">
      {testimonials.map((testimonial, index) => (
        <div className="card" key={index}>
          <img src={`/images/${testimonial.image}`} className="card-image" alt="" />
          <h2 className="card-title">{testimonial.name}</h2>
          <p className="card-text">{testimonial.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Testimonial;