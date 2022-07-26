import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import {useState, useEffect, useRef} from "react";


const Slider = (props)=>{

  const [img_width, img_wdthChange] = useState(890);
  const img_height = 360;
  const ref = useRef();

  useEffect(() => {
    let width = ref.current.offsetWidth;
    img_wdthChange(width);        
  }, []);

 
  const images = [
    { url: "https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg" },
    { url: "http://wowslider.com/sliders/demo-18/data1/images/new_york.jpg" },
  ];

   return(
    <div className='row' id='container'>
      <div className='col-12 d-flex justify-content-center mt-1' ref={ref}>
        <div >
          <SimpleImageSlider
            width={img_width}
            height={img_width < 890 ? Math.round(img_height * ((img_width * 100/890)/100)) : img_height}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>        
      </div>    
  </div>
   );
}

export default Slider



