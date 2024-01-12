'use client';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

type Props = {
  isOpen?: boolean;
  title: string;
  item: string;
  positiveText?: string;
  negativeText?: string;
  onPositiveClick?: () => Promise<void> | void;
  onNegativeClick?: () => void;
};
const Modal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  return (
    <div className={`relative z-10 ${!isOpen && 'hidden'} `} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 transition-opacity bg-zinc-900 bg-opacity-40"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto ">
        <div className="flex items-center justify-center min-h-full text-center sm:items-center sm:p-0">
          <div className="relative p-4 w-[490px] h-[355px] overflow-hidden text-left transition-all transform bg-white rounded-md shadow-xl">
            {/* Content */}
            <div className="flex flex-col items-center justify-between w-full p-5 h-full text-center">
              <div>
                <svg data-cy="modal-delete-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-[#ED4C5C]">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <p data-cy="modal-delete-title" className="text-lg font-normal text-dark ">
                {props.title || 'Title'} <span className="font-bold">"{props.item}"</span>?
              </p>
              <div className={`flex justify-evenly mt-5 font-medium w-full`}>
                <button
                  data-cy="modal-delete-cancel-button"
                  className="text-sm bg-secondary px-6 py-3 rounded-3xl text-dark"
                  onClick={() => {
                    props.onNegativeClick;
                    setIsOpen(false);
                  }}
                >
                  {props.negativeText || 'Kembali'}
                </button>
                <button
                  data-cy="modal-delete-confirm-button"
                  className={`text-sm bg-[#ED4C5C] px-6 py-3 text-center rounded-3xl text-white ${!props.onPositiveClick && 'hidden'}`}
                  onClick={() => {
                    props.onPositiveClick && props.onPositiveClick();
                    setIsOpen(false);
                  }}
                >
                  {props.positiveText || 'Ya'}
                </button>
              </div>
            </div>

            {/* End Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export function ShowModal(props: Props) {
  const alert = document.createElement('div');
  alert.id = 'alert';
  document.body.appendChild(alert);
  const root = createRoot(alert);
  root.render(<Modal isOpen={true} title={props.title} item={props.item} negativeText={props.negativeText} positiveText={props.positiveText} onNegativeClick={props.onNegativeClick} onPositiveClick={props.onPositiveClick} />);
}

const ModalInfo = ({ title }: { title: string }) => {
  useEffect(() => {
    setTimeout(() => {
      const info = document.getElementById('info');
      info?.remove();
    }, 2000);
  }, []);
  return (
    <div data-cy="modal-information" className={`relative z-10  `} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 transition-opacity bg-zinc-900 bg-opacity-40"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto ">
        <div className="flex items-center justify-center min-h-full text-center sm:items-center sm:p-0">
          <div className="relative py-4 px-6 w-max h-[58px] overflow-hidden text-left transition-all transform bg-white rounded-md shadow-xl">
            {/* Content */}
            <div className="flex items-center w-full gap-4 h-full text-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
              </div>
              <p className="text-base font-medium">{title} berhasil dihapus</p>
            </div>

            {/* End Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ShowInfo = (title: 'Activity' | 'Item') => {
  const info = document.createElement('div');
  info.id = 'info';
  document.body.appendChild(info);
  const root = createRoot(info);
  root.render(<ModalInfo title={title} />);
};

const InputModal = ({ children, width, height }: { children: React.ReactNode; width?: number; height?: number }) => {
  return (
    <div data-cy="modal-information" className={`relative z-10  `} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 transition-opacity bg-zinc-900 bg-opacity-40"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto ">
        <div className="flex items-center justify-center min-h-full text-center sm:items-center sm:p-0">
          <div className={`relative py-4 px-6 ${width ? `w-[${width}px]` : 'w-max'} ${height ? `h-[${height}px]` : 'h-full'} overflow-hidden text-left transition-all transform bg-white rounded-md shadow-xl`}>
            {/* Content */}
            {children}

            {/* End Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ShowInputModal = ( width?: number, height?: number) => {
  const inputModal = document.createElement('div');
  inputModal.id = 'inputModal';
  document.body.appendChild(inputModal);
  const root = createRoot(inputModal);
  root.render(
    <InputModal width={width} height={height}>
      <div>
        <input type="text" placeholder='Activity name' />
      </div>
    </InputModal>
  );
};
