import React, { CSSProperties } from 'react';
import { Link, useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

// import SidebarFront from "../../components/SidebarFront/";

import Container from '../../components/Container/Container';
import { useLogic } from './CategoryPage.logic';

export default function CategoryPage() {
  const { data } = useLogic();

  const override: CSSProperties = {
    display: 'block',
    margin: '10px auto',
    borderColor: 'red'
  };

  return (
    <Container>
      {!data.data ? (
        <ClipLoader
          color="red"
          loading={true}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="items-start w-full h-auto pt-4 ">
          <div className="flex flex-wrap gap-4 justify-around">
            {data.data.categoryName.map((res, i: number) => {
              const { thumb, slug } = res;
              return (
                <div key={i}>
                  <Link to={`/${slug}`}>
                    <img src={`${process.env.REACT_APP_API_URL_FILES}/${thumb}`} alt={slug} />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="h-screen w-1/4">{/* <SidebarFront /> */}</div>
        </div>
      )}
    </Container>
  );
}
