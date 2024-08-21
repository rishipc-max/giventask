import "./Services.css";
import image1 from "../../assets/services/1.png";
import image2 from "../../assets/services/2.png";
import image3 from "../../assets/services/3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Prev from "../../components/OurServices/PrevBtn";
import Next from "../../components/OurServices/NextBtn";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";


const Services = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (index) => setCurrentSlide(index),
    prevArrow: <Prev disabled={currentSlide === 0} />,
    nextArrow: <Next disabled={currentSlide >= totalSlides - 3} />,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const isMobile = useMediaQuery("(max-width:768px)");
  useEffect(() => {
    // Calculate the total number of slides based on your images
    const totalImages = isMobile ? 8 : 6; // You have 3 images in your example
    setTotalSlides(totalImages);
  }, []);


  return (
      <div className="services-section">
      <h1>Our Services</h1>   
      <div className="services-container">
        <Slider {...settings}>
       
          <div className="c-1 service-box">
                <img src={image1} alt="Services One" />
                <h3>Services One</h3>
                <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur quis semper sapien. Integer aliquam, purus sit amet fermentum blandit, ex arcu eleifend eros, at fermentum turpis lorem a purus.</p>
                <a href="/">Know More</a>
            </div>
            <div className="c-2 service-box">
                <img src={image2} alt="Services Two" />
                <h3>Services Two</h3>
                <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur quis semper sapien. Integer aliquam, purus sit amet fermentum blandit, ex arcu eleifend eros, at fermentum turpis lorem a purus.</p>
                <a href="/">Know More</a>
            </div>
            <div className="c-3 service-box">
                <img src={image3} alt="Services Three" />
                <h3>Services Three</h3>
                <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur quis semper sapien. Integer aliquam, purus sit amet fermentum blandit, ex arcu eleifend eros, at fermentum turpis lorem a purus.</p>
                <a href="/">Know More</a>
            </div>
            <div className="c-3 service-box">
                <img src={image1} alt="Services Four" />
                <h3>Services Four</h3>
                <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur quis semper sapien. Integer aliquam, purus sit amet fermentum blandit, ex arcu eleifend eros, at fermentum turpis lorem a purus.</p>
                <a href="/">Know More</a>
            </div>
            <div className="c-3 service-box">
                <img src={image2} alt="Services Five" />
                <h3>Services Five</h3>
                <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur quis semper sapien. Integer aliquam, purus sit amet fermentum blandit, ex arcu eleifend eros, at fermentum turpis lorem a purus.</p>
                <a href="/">Know More</a>
            </div>
            <div className="c-3 service-box">
                <img src={image3} alt="Services Six" />
                <h3>Services Six</h3>
                <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur quis semper sapien. Integer aliquam, purus sit amet fermentum blandit, ex arcu eleifend eros, at fermentum turpis lorem a purus.</p>
                <a href="/">Know More</a>
            </div>
        </Slider>

        
      </div>
      </div> 
      
  );
};

export default Services;
