import React from 'react';
import Admin from '../../../components/Admin/AdminLayout.view';
import { useLogic } from './Ads.logic';
import Modal from 'react-modal';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export default function Ads() {
  const { data, methods } = useLogic();

  return (
    <>
      <Admin>
        <div className="flex text-center text-black w-full flex-col pt-3 h-screen">
          <div>Atenção: Resolução da propaganda - largura: 930px, Altura: 100px</div>
          <div>{methods.adInformation('ad1')}</div>
          <div>{methods.adInformation('ad2')}</div>
          <div>{methods.adInformation('ad3')}</div>
          <div>{methods.adInformation('apoie')}</div>
        </div>
        <Modal
          isOpen={data.showModal}
          onAfterOpen={methods.afterModalOpened}
          onRequestClose={methods.closeModal}
          style={data.customStyles}
          contentLabel="Upload Ad">
          <button
            type="button"
            className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close">
            <IoIosCloseCircleOutline
              color="red"
              size={20}
              onClick={() => methods.closeModal(data.fileName)}
            />
          </button>

          <div className="flex justify-center items-center py-5">
            <div {...methods.getRootProps({ className: 'dropzone' })} className="text-center">
              {!data.thumbs ? (
                data.thumbs
              ) : (
                <img
                  src={`${process.env.REACT_APP_API_URL_FILES}/${
                    data.nameAd
                  }.png?cache=${new Date().valueOf()}`}
                  className="flex justify-center w-4/4 mb-3"
                  alt="nothumbnail"
                />
              )}

              <button
                type="button"
                onClick={methods.open}
                className="bg-[#c9c9cc] border-2 border-black p-1 my-3 elevation-5 w-40">
                Escolher uma foto
              </button>
            </div>
          </div>
        </Modal>
      </Admin>
    </>
  );
}
