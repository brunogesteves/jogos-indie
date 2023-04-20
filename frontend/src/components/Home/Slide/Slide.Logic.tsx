import React from 'react';

import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS_SLIDE } from '../../../Graphql/Queries';

interface SlidesInfo {
  name: string;
  thumb: string;
  slug: string;
}

interface SlidesData {
  getAllSlides: SlidesInfo[];
}

export const useLogic = () => {
  const { data } = useQuery<SlidesData>(GET_ALL_POSTS_SLIDE);

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          right: '5px',
          top: '-12px',
          background: 'black',
          borderRadius: '13px'
        }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          left: '465px',
          top: '-12px',
          background: 'black',
          borderRadius: '13px'
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      }
    ]
  };

  return {
    data: {
      settings,
      data
    }
  };
};
