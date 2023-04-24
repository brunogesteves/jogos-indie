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
        <div className="items-start w-3/4 h-auto pt-4">
          <div className="flex items-center flex justify-around">
            {data.data.categoryName.map((res: CategoryInfo, i: number) => {
              const { thumb, slug } = res;
              return (
                <div key={i}>
                  <Link to={`/${slug}`}>
                    <img src={`/${thumb}`} alt={slug} />
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
