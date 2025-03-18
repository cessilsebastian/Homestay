import React from "react";
import footerCSS from "./../Footer/Footer.module.css";

function Footer() {
  return (
    <footer className={`${footerCSS.footer_wrapper} section`}>
      <div className={footerCSS.FooterLinks}>
        <div className={footerCSS.logo}>
          <h2>Calm County Homestay</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, eaque
            error. Suscipit assumenda perspiciatis aut fuga porro provident
            nostrum harum quis at, sequi laboriosam ea eius maiores consequuntur
            itaque quidem.
          </p>
        </div>
      </div>
      <div className={footerCSS.FooterLinks}>
        <h3>Quick Links</h3>
        <p>About</p>
        <p>Contact Us</p>
        <p>Rooms</p>
      </div>
      <div className={footerCSS.FooterLinks}>
        <h3>Quick Links</h3>
        <p>About</p>
        <p>Contact Us</p>
        <p>Rooms</p>
      </div>
      <div className={footerCSS.FooterLinks}>
        <h3>Contact</h3>
        <p>
          Address:
          <span>
            Calm County Homestay
            <br />
            Payyampally (P.O.) Mananthavady
          </span>
        </p>
        <p>
          Email: <span>calmcounty@gmail.com</span>
        </p>
        <p>
          Phone: <span>+91 9961825943</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
