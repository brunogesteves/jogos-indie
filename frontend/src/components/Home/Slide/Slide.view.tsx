import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useLogic } from './Slide.Logic';

const Slide: React.FC = () => {
  const { data } = useLogic();

  return (
    <div className="flex w-2/4 relative px-2 max-sm:w-full">
      <Slider {...data.settings} className=" w-full h-auto mt-5 ">
        {data.data?.getAllSlides.map((res, i: number) => (
          <div key={i}>
            <Link to={`${res.slug}`}>
              <img
                key={i}
                // src={res.thumb}
                src={`${process.env.REACT_APP_API_URL_FILES}/${res.thumb}`}
                alt={res.name}
                className="w-full h-auto"
              />
              <div className=" text-3xl text-white absolute bottom-3 max-sm:text-sm pl-5">
                {res.name}
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
