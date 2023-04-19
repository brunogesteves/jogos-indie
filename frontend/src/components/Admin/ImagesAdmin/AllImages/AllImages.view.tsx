import React, { CSSProperties, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { GET_ALL_IMAGES } from '../../../../Graphql/Queries';
// import { DELETE_IMAGE } from "../../../../Graphql/Mutations";
import ClipLoader from 'react-spinners/ClipLoader';

export default function AllImages({ thumbName }) {
  const { data } = useQuery(GET_ALL_IMAGES);

  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red'
  };

  function clickImage(name: string) {
    thumbName(name);
  }

  return (
    <div className="flex flex-wrap justify-around gap-5">
      {!data ? (
        <ClipLoader
          color="red"
          loading={data ? false : true}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        data.getAllImages.map((image: { name: string }, i: number) => {
          return (
            <img
              key={i}
              src={`/${image.name} `}
              alt={image.name}
              className="w-44  cursor-pointer"
              onClick={() => clickImage(image.name)}
            />
          );
        })
      )}
    </div>
  );
}
