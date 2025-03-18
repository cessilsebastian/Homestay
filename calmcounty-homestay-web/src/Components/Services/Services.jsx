import React from "react";
import ServicesCSS from "./../Services/Service.module.css";

function Services() {
  return (
    <div className={`${ServicesCSS.Service_wrapper} section`}>
      <small className="section__Heading">Facilities</small>
      <h2 className="section__Title">
        Our Best <span>Services</span>
      </h2>

      <div className={ServicesCSS.Service_cards}>
        <div className={ServicesCSS.Service_card}>
          <i className="ri-hotel-line"></i>
          <h3>Basic Facilities</h3>
          <p>- Reception Front Desk</p>
          <p>- Security</p>
          <p>- Room Service</p>
          <p>- House Keeping</p>
          <p>- Wifi & Parking</p>
        </div>
        <div className={ServicesCSS.Service_card}>
          <i className="ri-hotel-bed-line"></i>
          <h3>Room Amenities</h3>
          <p>- Comfortable bedding</p>
          <p>- Bedroom and Pool</p>
          <p>- Room Service</p>
          <p>- TV and AC</p>
          <p>- Wifi & Parking</p>
        </div>
        <div className={ServicesCSS.Service_card}>
          <i className="ri-goblet-line"></i>
          <h3>Dining Options</h3>
          <p>- Home made food</p>
          <p>- Home grown produce</p>
          <p>- Cafe and Canteen</p>
          <p>- TV and AC</p>
          <p>- Wifi & Parking</p>
        </div>
        <div className={ServicesCSS.Service_card}>
          <i className="ri-restaurant-line"></i>
          <h3>Special Features</h3>
          <p>- Custome rooms</p>
          <p>- Volleyball court</p>
          <p>- Cafe and Canteen</p>
          <p>- TV and AC</p>
          <p>- Wifi & Parking</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
