import React from "react";
import { useMutation, useQuery } from "@apollo/client";

import { GET_ALL_IMAGES } from "../../../../Graphql/Queries";
// import { DELETE_IMAGE } from "../../../../Graphql/Mutations";

export default function AllImages() {
  const { data } = useQuery(GET_ALL_IMAGES);

  return (
    <div className="flex flex-wrap justify-around  gap-5">
      {data?.getAllImages.map((image: { name: string }, i: number) => {
        return (
          <img
            key={i}
            src={`/${image.name}`}
            alt={image.name}
            className="w-44 bg-red-500 cursor-pointer"
          />
        );
      })}
    </div>
  );
}
