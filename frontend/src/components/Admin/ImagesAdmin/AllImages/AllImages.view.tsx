import React, { CSSProperties } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { BsFillTrashFill } from 'react-icons/bs';

import { GET_ALL_IMAGES } from '../../../../Graphql/Queries';
import { DELETE_IMAGE } from '../../../../Graphql/Mutations';
import ClipLoader from 'react-spinners/ClipLoader';

export default function AllImages({ thumbName }) {
  const { data, refetch } = useQuery(GET_ALL_IMAGES);
  const [deleteImage] = useMutation(DELETE_IMAGE);

  const override: CSSProperties = {
    display: 'block',
    margin: 'auto',
    borderColor: 'red'
  };

  function clickImage(name: string) {
    thumbName(name);
  }

  function eraseImage(id: number) {
    deleteImage({
      variables: {
        input: {
          id: id
        }
      },
      onCompleted: () => {
        refetch();
      }
    });
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
        data.getAllImages.map((image: { name: string; id: number }) => {
          return (
            <div className="relative">
              <img
                key={image.id}
                src={`${process.env.REACT_APP_API_URL_FILES}/${image.name} `}
                alt={image.name}
                className="w-44  cursor-pointer"
                onClick={() => clickImage(image.name)}
              />
              <BsFillTrashFill
                color="red"
                className="absolute top-3 right-3"
                onClick={() => eraseImage(image.id)}
              />
            </div>
          );
        })
      )}
    </div>
  );
}
