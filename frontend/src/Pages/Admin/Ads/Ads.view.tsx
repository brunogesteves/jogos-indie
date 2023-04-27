import React from 'react';
import Admin from '../../../components/Admin/AdminLayout.view';
import { useLogic } from './Ads.logic';
import Modal from 'react-modal';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import UploadImage from '../../../components/Admin/ImagesAdmin/UploadImages/UploadImages';

export default function Ads() {
  const { data, methods } = useLogic();
  return (
    <>
      <Admin>
        <div className="flex text-center text-black w-full flex-col pt-3 h-screen">
          Atenção: Resolução da propaganda - largura: 930px, Altura: 100px
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

          <UploadImage fileName={undefined} />
        </Modal>
      </Admin>
    </>
  );
}
