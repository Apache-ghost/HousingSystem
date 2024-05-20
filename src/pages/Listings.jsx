import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming you're using Font Awesome icons

const Listings = () => {
    return (
        <section className="listings">
            <h1 className="heading">all listings</h1>
            <div className="box-container">
                {/* Repeat this structure for each listing */}
                <div className="box">
                    <div className="admin">
                        <h3>j</h3>
                        <div>
                            <p>john deo</p>
                            <span>10-11-2022</span>
                        </div>
                    </div>
                    <div className="thumb">
                        <p className="total-images">
                            <FontAwesomeIcon icon={['far', 'image']} />
                            <span>4</span>
                        </p>
                        <p className="type">
                            <span>house</span>
                            <span>sale</span>
                        </p>
                        <form action="" method="post" className="save">
                            <button type="submit" name="save">
                                <FontAwesomeIcon icon={['far', 'heart']} />
                            </button>
                        </form>
                        <img src="images/house-img-1.webp" alt="" />
                    </div>
                    <h3 className="name">modern flats and apartments</h3>
                    <p className="location">
                        <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
                        <span>andheri, mumbai, india - 401303</span>
                    </p>
                    <div className="flex">
                        <p>
                            <FontAwesomeIcon icon={['fas', 'bed']} />
                            <span>3</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={['fas', 'bath']} />
                            <span>2</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={['fas', 'maximize']} />
                            <span>750sqft</span>
                        </p>
                    </div>
                    <a href="view_property.html" className="btn">view property</a>
                </div>
                {/* Repeat the above structure for each listing */}
            </div>
        </section>
    );
};

export default Listings;
