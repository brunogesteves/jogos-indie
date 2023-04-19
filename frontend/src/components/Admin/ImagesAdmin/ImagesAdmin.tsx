import React, { useState, useEffect, CSSProperties } from 'react';
// import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import { IconButton } from "@mui/material";

// import "./ImagesWIndow.css";
// import FileDrop from "../FileDrop/FileDrop";
import { Tab, initTE } from 'tw-elements';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import AllImages from './AllImages/AllImages.view';
import UploadImage from './UploadImages/UploadImages';

import Modal from 'react-modal';

export default function ImagesAdmin({ thumbName }) {
  initTE({ Tab });
  const [fileName, setFileName] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [customStyles, setCustomStyles] = useState<any>({
    content: {
      top: '10%',
      left: '10%',
      right: '10%',
      bottom: '50%',
      width: 'auto',
      borderRadius: '10px',
      opacity: '0%',
      translate: '0% 0%',
      transiton: 'all .35s ease-in-out'
    }
  });

  useEffect(() => {
    thumbName(fileName);
  }, [fileName]);

  function afterModalOpened() {
    setCustomStyles({
      content: {
        top: '10%',
        left: '10%',
        right: '10%',
        bottom: '10%',
        width: 'auto',
        borderRadius: '10px',
        opacity: '100%',
        translate: '0% 5%',
        transition: 'all .35s ease-in-out'
      }
    });
  }

  function closeModal(name: string) {
    setFileName(name);
    setShowModal(false);
    setCustomStyles({
      content: {
        top: '10%',
        left: '10%',
        right: '10%',
        bottom: '10%',
        width: 'auto',
        borderRadius: '10px',
        opacity: '0%',
        translate: '0% 0%',
        transiton: 'all .35 ease-in-out'
      }
    });
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        type="button"
        className="inline-block left-14 rounded ml-6 bg-red-400 mr-6 px-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
        Adicionar Thumbnail
      </button>

      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        onAfterOpen={afterModalOpened}
        style={customStyles}
        contentLabel="Modal Images">
        <button
          type="button"
          className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-modal-dismiss
          aria-label="Close">
          <IoIosCloseCircleOutline color="red" size={20} onClick={() => closeModal(fileName)} />
        </button>
        <div className="relative flex-auto p-4" data-te-modal-body-ref>
          <ul
            className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0 "
            role="tablist"
            data-te-nav-ref>
            <li role="presentation" className="w-1/2 text-center">
              <a
                href="#tab-allImages"
                className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent  pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500  hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-red-500 data-[te-nav-active]:text-red-500 dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-red-400 dark:data-[te-nav-active]:text-red-400"
                data-te-toggle="pill"
                data-te-target="#tab-allImages"
                data-te-nav-active
                role="tab"
                aria-controls="tab-allImages"
                aria-selected="true">
                Escolha Uma Thumbnail
              </a>
            </li>
            <li role="presentation" className="w-1/2 text-center">
              <a
                href="#tab-upload"
                className="focus:border-transparent my-2 block border-x-0 border-b-2 border-t-0 border-transparent  pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-red-500 data-[te-nav-active]:text-red-500 dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-red-400 dark:data-[te-nav-active]:text-red-400"
                data-te-toggle="pill"
                data-te-target="#tab-upload"
                role="tab"
                aria-controls="tab-upload"
                aria-selected="false">
                Upload Thumbnail
              </a>
            </li>
          </ul>
          <div>
            <div
              className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
              id="tab-allImages"
              role="tabpanel"
              aria-labelledby="tab-allImages-tab"
              data-te-tab-active>
              <AllImages thumbName={(name: string) => closeModal(name)} />
            </div>
            <div
              className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block "
              id="tab-upload"
              role="tabpanel"
              aria-labelledby="tab-upload-tab">
              <UploadImage fileName={(name: string) => setFileName(name)} />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
