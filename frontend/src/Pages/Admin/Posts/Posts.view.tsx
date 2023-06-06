import React from 'react';
import { Link } from 'react-router-dom';
import Admin from '../../../components/Admin/AdminLayout.view';

import { useLogic } from './Posts.logic';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Posts() {
  const { data, methods } = useLogic();

  return (
    <>
      <Admin>
        <ul className="w-full px-10 ">
          {!data.data ? (
            <ClipLoader
              color="white"
              loading={data.data ? false : true}
              cssOverride={data.override}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            data.data?.getAllPosts.map((res, i: number) => {
              return (
                <div key={i} className="flex justify-between items-center pt-5 ">
                  <div className="w-3/12 mb-6">
                    <Link
                      to={`/admin/updatepost/${res.id}`}
                      key={i}
                      style={{ textDecoration: 'none' }}>
                      {res.name}
                    </Link>
                  </div>
                  <div>{methods.schedule(res.schedule)}</div>
                  {methods.optionField('Slide', 'slide', res.id, res.slide)}
                  {methods.optionField('Meio', 'midSection', res.id, res.midSection)}
                  {methods.optionField('Gameplay', 'gameplay', res.id, res.gameplay)}
                  {methods.optionField('Público', 'publicPost', res.id, res.publicPost)}
                  <button
                    onClick={() =>
                      methods.deletePost({
                        variables: { id: res.id },
                        onCompleted: methods.refetch
                      })
                    }
                    className="bg-red-500 text-white p-2 rounded-lg text-sm">
                    Apagar
                  </button>
                </div>
              );
            })
          )}
        </ul>
      </Admin>
    </>
  );
}
