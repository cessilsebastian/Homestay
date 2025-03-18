import React from "react";
import aboutCSS from "./../About/About.module.css";
import aboutImg from "./../../assets/image1.jpg";

function About() {
  return (
    <div className={`${aboutCSS.about_wrapper} section`}>
      <div className={aboutCSS.about_img}>
        <img src={aboutImg} alt="about_image" />
      </div>
      <div className={aboutCSS.about_content}>
        <small className="section__Heading">The Calm County Homestay</small>
        <h2 className="section__Title">
          Experience the tranquility of the <span>Countryside</span>
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
          distinctio rem eaque tenetur adipisci reprehenderit voluptatibus
          incidunt non fugit quibusdam expedita, sapiente cumque nemo soluta aut
          accusamus officiis hic quod.
        </p>

        <div className={aboutCSS.Cards}>
          <p>
            100+ <span>Satisfied Customers</span>
          </p>
          <p>
            5/5 <span>Rating</span>
          </p>
          <p>
            1000+ <span>Reviews</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
