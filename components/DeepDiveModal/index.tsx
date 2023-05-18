import React, { Fragment } from "react";

type DeepDiveModalProps = {
  isOpen: boolean;
  title: string;
  content: string;
  onClose: () => void;
};

const DeepDiveModal = ({
  isOpen,
  title,
  content,
  onClose,
}: DeepDiveModalProps) => {
  return (
    <Fragment>
      {/* Dark overlay */}
      {isOpen && <div className="fixed inset-0 z-50 bg-black bg-opacity-25" />}

      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2
         -translate-y-1/2 z-50 w-2/3 md:w-1/2 p-4 overflow-y-auto bg-white rounded`}
      >
        {/* Close button */}
        <button className="absolute top-3 right-3" onClick={onClose}>
          Close
        </button>

        {/* Title */}
        <div className="mb-4 flex flex-col">
          <span
            className="bg-black text-white w-fit mb-2 text-sm  
           font-semibold mr-2 px-2.5 py-0.5 rounded"
          >
            Deep Dive
          </span>
          <span className="text-xl font-bold">{title}</span>
        </div>

        {/* Content */}
        <div className="text-gray-600">{content}</div>
      </div>
    </Fragment>
  );
};

export default DeepDiveModal;
