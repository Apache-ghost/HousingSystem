import React from 'react';


const ViewProperty = () => {
  return (
    <section className="view-property">
      <div className="details">
        <div className="thumb">
          <div className="big-image">
            <img src="images/house-img-1.webp" alt="House" />
          </div>
          <div className="small-images">
            <img src="./public/images/house-img-1.webp" alt="House" />
            <img src="./public/images/hall-img-1.webp" alt="Hall" />
            <img src="./public/images/kitchen-img-1.webp" alt="Kitchen" />
            <img src="./public/images/bathroom-img-1.webp" alt="Bathroom" />
          </div>
        </div>
        <h3 className="name">Modern Flats and Apartments</h3>
        <p className="location">
          <i className="fas fa-map-marker-alt"></i>
          <span>Andheri, Mumbai, India - 400104</span>
        </p>
        <div className="info">
          <p><i className="fas fa-tag"></i><span>15 lac</span></p>
          <p><i className="fas fa-user"></i><span>John Deo (Owner)</span></p>
          <p><i className="fas fa-phone"></i><a href="tel:1234567890">1234567890</a></p>
          <p><i className="fas fa-building"></i><span>Flat</span></p>
          <p><i className="fas fa-house"></i><span>Sale</span></p>
          <p><i className="fas fa-calendar"></i><span>10-11-2022</span></p>
        </div>
        <h3 className="title">Details</h3>
        <div className="flex">
          <div className="box">
            <p><i>Rooms :</i><span>2 BHK</span></p>
            <p><i>Deposit Amount :</i><span>0</span></p>
            <p><i>Status :</i><span>Ready to move</span></p>
            <p><i>Bedroom :</i><span>3</span></p>
            <p><i>Bathroom :</i><span>2</span></p>
            <p><i>Balcony :</i><span>1</span></p>
          </div>
          <div className="box">
            <p><i>Carpet Area :</i><span>750 sqft</span></p>
            <p><i>Age :</i><span>3 years</span></p>
            <p><i>Room Floor :</i><span>3</span></p>
            <p><i>Total Floors :</i><span>22</span></p>
            <p><i>Furnished :</i><span>Semi-furnished</span></p>
            <p><i>Loan :</i><span>Available</span></p>
          </div>
        </div>
        <h3 className="title">Amenities</h3>
        <div className="flex">
          <div className="box">
            <p><i className="fas fa-check"></i><span>Lifts</span></p>
            <p><i className="fas fa-check"></i><span>Security Guards</span></p>
            <p><i className="fas fa-times"></i><span>Play Ground</span></p>
            <p><i className="fas fa-check"></i><span>Gardens</span></p>
            <p><i className="fas fa-check"></i><span>Water Supply</span></p>
            <p><i className="fas fa-check"></i><span>Power Backup</span></p>
          </div>
          <div className="box">
            <p><i className="fas fa-check"></i><span>Parking Area</span></p>
            <p><i className="fas fa-times"></i><span>Gym</span></p>
            <p><i className="fas fa-check"></i><span>Shopping Mall</span></p>
            <p><i className="fas fa-check"></i><span>Hospital</span></p>
            <p><i className="fas fa-check"></i><span>Schools</span></p>
            <p><i className="fas fa-check"></i><span>Market Area</span></p>
          </div>
        </div>
        <h3 className="title">Description</h3>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cupiditate aliquid ipsum recusandae maxime nisi, velit eaque, libero, exercitationem culpa accusamus. Neque dolor quaerat modi saepe facere dignissimos temporibus molestias.
        </p>
        <form action="" method="post">
          <input type="submit" value="Save Property" name="save" className="inline-btn" />
        </form>
      </div>
    </section>
  );
};

export default ViewProperty;
