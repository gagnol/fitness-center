import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import slide1 from "../img/slide_8.jpg";
import slide2 from "../img/slide_9.jpg";
import slide3 from "../img/slide_10.jpg";
import slide4 from "../img/slide_11.jpg";
import slide5 from "../img/slide_12.jpg";

const Banner = () => {
  return (
    <section id="promo">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div id="promo-carousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <Carousel animation="slide" autoPlay={true} labels={false} infiniteLoop interval={4000} showIndicators={false} showStatus={false}
                  showThumbs={false} >
                  <div className="item active">
                    <Image alt="" src={slide1} />
                  </div>
                  <div className="item">
                    <Image alt="" src={slide2} />
                  </div>
                  <div className="item">
                    <Image alt="" src={slide3} />
                  </div>
                  <div className="item">
                    <Image alt="" src={slide4} />
                  </div>
                  <div className="item">
                    <Image alt="" src={slide5} />
                  </div>

                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;