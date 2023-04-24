import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import Admin from '../../../components/Admin/AdminLayout.view';

import { useLogic } from './Posts.logic';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Posts() {
  const { data, methods } = useLogic();

  console.log(data.data?.getAllPosts);

  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red'
  };

  return (
    <>
      <Admin>
        <ul className="w-full px-10 h-screen  ">
          {!data.data ? (
            <ClipLoader
              color="white"
              loading={data.data ? false : true}
              cssOverride={override}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            data.data?.getAllPosts.map((res: AllPosts, i: number) => {
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
                  <div>{res.schedule}</div>
                  <div>
                    <span className="mr-1">Slide</span>
                    <input
                      type="checkbox"
                      onClick={(e) =>
                        methods.updateOption({
                          variables: {
                            data: {
                              id: res.id.toString(),
                              option: 'slide',
                              info: (e.target as HTMLInputElement).checked
                            }
                          }
                        })
                      }
                      defaultChecked={res.slide}
                    />
                  </div>
                  <div>
                    <span className="mr-1">Meio</span>
                    <input
                      type="checkbox"
                      onClick={(e) =>
                        methods.updateOption({
                          variables: {
                            data: {
                              id: res.id.toString(),
                              info: (e.target as HTMLInputElement).checked,
                              option: 'midSection'
                            }
                          }
                        })
                      }
                      defaultChecked={res.midSection}
                    />
                  </div>
                  <div>
                    <span className="mr-1">Gameplay</span>
                    <input
                      type="checkbox"
                      onClick={(e) =>
                        methods.updateOption({
                          variables: {
                            data: {
                              id: res.id.toString(),
                              option: 'gameplay',
                              info: (e.target as HTMLInputElement).checked
                            }
                          }
                        })
                      }
                      defaultChecked={res.gameplay}
                    />
                  </div>

                  <div>
                    <span className="mr-1">Público</span>
                    <input
                      type="checkbox"
                      onClick={(e) =>
                        methods.updateOption({
                          variables: {
                            data: {
                              id: res.id.toString(),
                              option: 'public',
                              info: (e.target as HTMLInputElement).checked
                            }
                          }
                        })
                      }
                      defaultChecked={res.public}
                    />
                  </div>
                  <button
                    onClick={() => methods.deletePost({ variables: { id: res.id } })}
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
