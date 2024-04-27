import React from 'react'

const Slider = () => {
  return (
    <div>Slider</div>
  )
}

export default Slider
// import React from "react";
// import Slider from "react-slick";

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "black" }}
//             onClick={onClick}
//         />
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "inline", background: "yellow" }}
//             onClick={onClick}
//         />
//     );
// }
// export default function SimpleSlider() {


//     const settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />
//     };
//     return (
//         <Slider {...settings}>
//             <div className="one">
//                 <h3></h3>
//             </div>
//             <div className="two">
//                 <h3></h3>
//             </div>
//             <div className="three">
//                 <h3></h3>
//             </div>
//             {/* <div className="four">
//                 <h3>4</h3>
//             </div>
//             <div className="five">
//                 <h3>5</h3>
//             </div>
//             <div className="">
//                 <h3>6</h3>
//             </div> */}
//         </Slider>
//     );
// }
