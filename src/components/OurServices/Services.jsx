import "./Services.css";
import image1 from "../../assets/services/1.png";
import image2 from "../../assets/services/2.png";
import image3 from "../../assets/services/3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Prev from "../../components/OurServices/PrevBtn";
import Next from "../../components/OurServices/NextBtn";
import { useState } from "react";


// const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
   
//     prevArrow: <Prev/>,
//     nextArrow: <Next /> ,
//     autoplay: false,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

const Services = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handlePrevClick = () => {
    setSelectedButton("prev");
  };

  const handleNextClick = () => {
    setSelectedButton("next");
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <Prev onClick={handlePrevClick} isSelected={selectedButton === "prev"} />,
    nextArrow: <Next onClick={handleNextClick} isSelected={selectedButton === "next"} />,
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
                <h3>Services Three</h3>
                <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur quis semper sapien. Integer aliquam, purus sit amet fermentum blandit, ex arcu eleifend eros, at fermentum turpis lorem a purus.</p>
                <a href="/">Know More</a>
            </div>
            <div className="c-3 service-box">
                <img src={image2} alt="Services Five" />
                <h3>Services Three</h3>
                <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur quis semper sapien. Integer aliquam, purus sit amet fermentum blandit, ex arcu eleifend eros, at fermentum turpis lorem a purus.</p>
                <a href="/">Know More</a>
            </div>
            <div className="c-3 service-box">
                <img src={image3} alt="Services Six" />
                <h3>Services Three</h3>
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
