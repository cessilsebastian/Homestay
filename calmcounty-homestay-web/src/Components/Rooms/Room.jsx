import React from "react";
import roomsCSS from "./../Rooms/Room.module.css";

function Rooms() {
  return (
    <div className={`${roomsCSS.Rooms_container} section`}>
      <small className="section__Heading">Luxury Suits</small>
      <h2 className="section__Title">
        Our Best <span>Rooms</span>
      </h2>

      <div className={roomsCSS.cards}>
        <div className={roomsCSS.card_Container}>
          <div className={roomsCSS.card}>
            <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front1}`}>
              <button>Junior Suite</button>
            </div>
            <div className={`${roomsCSS.Card_back} ${roomsCSS.Card_back1}`}>
              <div className={roomsCSS.price}>
                <p>Price: $120/Night</p>
              </div>
              <div className={roomsCSS.Card_content}>
                <h3>Junior Suite</h3>
                <p>- Daily Cleaning</p>
                <p>- Homely food</p>
                <p>- Housekeeping</p>
                <p>- Wifi & Parking</p>
              </div>

              <div className={roomsCSS.BookNow}>
                <button>Book Now</button>
                <i className="ri-arrow-right-line"></i>
              </div>
            </div>
          </div>
        </div>
        <div className={roomsCSS.card_Container}>
          <div className={roomsCSS.card}>
            <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front2}`}>
              <button>Full Suite</button>
            </div>
            <div className={`${roomsCSS.Card_back} ${roomsCSS.Card_back2}`}>
              <div className={roomsCSS.price}>
                <p>Price: $120/Night</p>
              </div>
              <div className={roomsCSS.Card_content}>
                <h3>Junior Suite</h3>
                <p>- Daily Cleaning</p>
                <p>- Homely food</p>
                <p>- Housekeeping</p>
                <p>- Wifi & Parking</p>
              </div>

              <div className={roomsCSS.BookNow}>
                <button>Book Now</button>
                <i className="ri-arrow-right-line"></i>
              </div>
            </div>
          </div>
        </div>
        <div className={roomsCSS.card_Container}>
          <div className={roomsCSS.card}>
            <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front3}`}>
              <button>Junior Suite</button>
            </div>
            <div className={`${roomsCSS.Card_back} ${roomsCSS.Card_back3}`}>
              <div className={roomsCSS.price}>
                <p>Price: $120/Night</p>
              </div>
              <div className={roomsCSS.Card_content}>
                <h3>Junior Suite</h3>
                <p>- Daily Cleaning</p>
                <p>- Homely food</p>
                <p>- Housekeeping</p>
                <p>- Wifi & Parking</p>
              </div>

              <div className={roomsCSS.BookNow}>
                <button>Book Now</button>
                <i className="ri-arrow-right-line"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
